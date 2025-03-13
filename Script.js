    <script>
        function nextStep(current, next) {
            document.getElementById(current).style.display = "none";
            document.getElementById(next).style.display = "block";
        }

        function suggestMedication() {
            const symptoms = document.getElementById("symptoms").value.toLowerCase();
            let medication = "No suggestion available";

            if (symptoms.includes("fever") || symptoms.includes("cough")) {
                medication = "Paracetamol & Rest";
            } else if (symptoms.includes("headache")) {
                medication = "Painkillers like Ibuprofen";
            } else if (symptoms.includes("stomach pain")) {
                medication = "Antacids & Hydration";
            }

            document.getElementById("consultationStep").style.display = "none";
            document.getElementById("medicationStep").style.display = "block";
            document.getElementById("medicationText").innerText = medication;
        }

        function restart() {
            document.getElementById("medicationStep").style.display = "none";
            document.getElementById("loginStep").style.display = "block";
        }
    </script>    <style>
        body {
            font-family: Arial, sans-serif;
            text-align: center;
            background: url('https://source.unsplash.com/KQfxVDHGCUg/1600x900') no-repeat center center/cover;
            color: white;
        }
        .navbar { background: rgba(0, 123, 255, 0.8); padding: 15px; }
        .btn { background: #28A745; color: white; padding: 10px 15px; border: none; cursor: pointer; border-radius: 5px; }
        .btn:hover { background: #218838; }
        .step { background: rgba(255, 255, 255, 0.9); padding: 20px; max-width: 400px; margin: 50px auto; border-radius: 10px; box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.2); color: black; }
        input, textarea { width: 100%; padding: 10px; margin: 10px 0; border-radius: 5px; border: 1px solid #ddd; }
    </style>
