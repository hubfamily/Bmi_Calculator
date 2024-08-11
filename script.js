document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('bmi-form');
    const resultDiv = document.getElementById('result');

    form.addEventListener('submit', function(event) {
        event.preventDefault();

        const heightInput = document.getElementById('height');
        const weightInput = document.getElementById('weight');

        const height = parseFloat(heightInput.value);
        const weight = parseFloat(weightInput.value);

        if (isNaN(height) || isNaN(weight) || height <= 0 || weight <= 0) {
            resultDiv.innerHTML = '<p class="text-red-500">유효한 값을 입력해 주세요.</p>';
            return;
        }

        const heightInMeters = height / 100;
        const bmi = weight / (heightInMeters ** 2);

        let bmiCategory = '';
        let exerciseRecommendation = '';
        if (bmi < 18.5) {
            bmiCategory = '저체중';
            exerciseRecommendation = '체중 증가를 위해 근육 강화 운동과 함께 충분한 영양 섭취가 필요합니다. 추천 운동: 덤벨 운동, 스쿼트, 풀업.';
        } else if (bmi < 24.9) {
            bmiCategory = '정상 체중';
            exerciseRecommendation = '건강한 체중을 유지하기 위해 균형 잡힌 운동이 필요합니다. 추천 운동: 조깅, 자전거 타기, 요가.';
        } else if (bmi < 29.9) {
            bmiCategory = '과체중';
            exerciseRecommendation = '체중 감량을 위해 유산소 운동과 함께 근력 운동을 병행하세요. 추천 운동: 하이킹, 수영, 인터벌 트레이닝.';
        } else {
            bmiCategory = '비만';
            exerciseRecommendation = '체중 감량을 위한 고강도 유산소 운동과 식단 조절이 필요합니다. 추천 운동: 러닝, 점프 로프, HIIT.';
        }

        resultDiv.innerHTML = `
            <h2 class="text-2xl font-bold mb-2">BMI 결과</h2>
            <p class="text-xl">체질량지수 (BMI): ${bmi.toFixed(2)}</p>
            <p class="text-lg mt-2">상태: ${bmiCategory}</p>
            <h3 class="text-lg font-semibold mt-4">추천 운동</h3>
            <p>${exerciseRecommendation}</p>
        `;
    });
});
