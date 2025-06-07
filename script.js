let step = 1;
const totalSteps = 4;

function nextStep() {
    step++;
    const question = document.getElementById('question');
    const options = document.getElementById('options');
    const progressBar = document.getElementById('progress-bar');
    const progressText = document.getElementById('progress-text');

    // Update progress bar
    progressBar.style.width = `${(step / totalSteps) * 100}%`;
    progressText.textContent = `Step ${step} of ${totalSteps}`;

    // Update steps
    if (step === 2) {
        question.textContent = "How often do you exercise?";
        options.innerHTML = `
            <button class="option" onclick="nextStep()">Never <span>→</span></button>
            <button class="option" onclick="nextStep()">1-2 times/week <span>→</span></button>
            <button class="option" onclick="nextStep()">3-4 times/week <span>→</span></button>
            <button class="option" onclick="nextStep()">5+ times/week <span>→</span></button>
        `;
    } else if (step === 3) {
        question.textContent = "Choose your goal:";
        options.innerHTML = `
            <button class="option" onclick="nextStep()">Burn fat <span>→</span></button>
            <button class="option" onclick="nextStep()">Gain muscle <span>→</span></button>
            <button class="option" onclick="nextStep()">Improve endurance <span>→</span></button>
            <button class="option" onclick="nextStep()">Feel healthier <span>→</span></button>
        `;
    } else if (step === 4) {
        question.textContent = "🎉 Your Personalized Result";
        options.innerHTML = `
            <div class="result-section">
                <p class="result-message">Congratulations! Here is your personalized result based on your answers:</p>
                <img src="images/result-image.jpg" alt="Result Image" class="result-img" />
                <div class="result-actions">
                    <a href="https://www.moneysite.com" target="_blank" class="continue-link">
                        <button class="option result-btn">Continue to Site <span>→</span></button>
                    </a>
                </div>
            </div>
        `;
    }
}
