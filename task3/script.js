fetch('schoolData.json').then(response => response.json()).then(data => {

    document.querySelector("#schoolName").textContent=data.school_name;

    document.querySelector("#cls").textContent=data.class;
 
    const select = document.querySelector('#studentSelect');

    const heading = document.querySelector('#heading');

    const maths = document.querySelector('#math');

    const physic = document.querySelector('#phy');

    const chemist = document.querySelector('#chem');

    //looping

    Object.entries(data.students).forEach(([key, value]) => {

        const option = document.createElement('option');

        option.value = key;

        option.textContent = value.id;

        select.appendChild(option);

    });

    // Listen for changes

    select.addEventListener('change', () => {

        const selectedKey = select.value;
        console.log(selectedKey);

        if (selectedKey) {

            const selectedData = data.students[selectedKey];

            heading.textContent = selectedData.name;

            maths.textContent = "maths:" + selectedData.grade.math;

            physic.textContent = "physics:" + selectedData.grade.physics;

            chemist.textContent = "chemistry:" + selectedData.grade.chemistry;

        } else {

            heading.textContent = "Selected an option";

            maths.textContent = ""

            physic.textContent = ""
            chemist.textContent = ""
        }

    });

}).catch(error => console.error('Error Loading JSON file', error));