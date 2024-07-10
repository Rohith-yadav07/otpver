const form = document.getElementById("otpForm");

        form.addEventListener("submit", function(event) {
            event.preventDefault();

            let otpCode = "";
            const inputs = document.querySelectorAll("input");
            inputs.forEach(input => {
                otpCode += input.value;
            });

            if (otpCode.length === 4 && /^\d+$/.test(otpCode)) {
                alert("OTP code is valid");
            } else {
                alert("OTP code is invalid");
            }
        });
