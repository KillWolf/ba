angular.module('KOL').controller('redigerCtrl', [
		'$scope',
		'$stateParams',
		'$state',
		'patients',
		'patient',
		function($scope, $stateParams, $state, patients, patient){
			  //Based on the organisation principles of Piles on the floor, the socks drawer and modularity, I've put my controllers in the socks drawer.
 			  //For bigger projects, modularity is wanted, but this small application didn't warrant such a structure.
 			  //This controller is explictly for editing an exisiting patient and save it to the database.

				$scope.patients = patients.patients;
		
				$scope.patient = patient;

		$scope.updatePatient = function(patient){ 
				
			
				patients.update({
				  id: $scope.patient._id,
				  ipadid: $scope.patient.ipadid,
                  name: $scope.patient.name,
                  surname: $scope.patient.surname,
                  age: $scope.patient.age,
                  kolcategory: $scope.patient.kolcategory,
                  video: $scope.patient.video,
                  patientjournal: $scope.patient.patientjournal,
                  additionalinfo: $scope.patient.additionalinfo,
				})

				$state.go('redigerOversigt')
				
			};
			
				

	}])