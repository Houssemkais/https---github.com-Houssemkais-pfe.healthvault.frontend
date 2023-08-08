import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { PatientData } from 'src/api/models/patient-data';
import { PredictionControllerService } from 'src/api/services/prediction-controller.service';

@Component({
  selector: 'app-analysis',
  templateUrl: './analysis.component.html',
  styleUrls: ['./analysis.component.css']
})
export class AnalysisComponent {
  patientData: PatientData = {};
  predictionResult: number | null = null;
  constructor(private predictionService: PredictionControllerService) { }
  ngOnInit(): void {
  }
  @ViewChild('predictionForm', { static: true })
  predictionForm!: NgForm;
  predict() {
    if (!this.isFormValid()) {
      return;}
    this.predictionService.predictPatientData({ body: this.patientData }).subscribe(
      (result: number[]) => {
        // Supposons que le service renvoie un tableau, prenons la première valeur
        this.predictionResult = result[0];
      },
      (error) => {
        console.error('Erreur de prédiction:', error);
      }
    );
  }
  isFormValid(): boolean {
    // Check if all required fields are filled and the form is valid
    return (
      this.predictionForm.valid &&
      this.predictionForm.value.age &&
      this.predictionForm.value.glucose &&
      this.predictionForm.value.bloodPressure &&
      this.predictionForm.value.bmi &&
      this.predictionForm.value.diabetesPedigreeFunction &&
      this.predictionForm.value.pregnancies &&
      this.predictionForm.value.skinThickness 
  
    );
  }
}
