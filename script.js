FormeCreate();

function FormeCreate() {
    const BODYCONTAIN = document.querySelector("body");

    BODYCONTAIN.innerHTML = "";
    let lodingSection = document.createElement("div");
    let FormeFrame = document.createElement("div");
    let FFrame = document.createElement("div");
    let FFrameL = document.createElement("div");
    let FFrameN = document.createElement("div");
    let lodingForme = document.createElement('form');
    let rq0 = document.createElement("div");
    let rq1 = document.createElement("div");
    let rq2 = document.createElement("div");
    let rq3 = document.createElement("div");
    let rq4 = document.createElement("div");
    let lable0 = document.createElement("lable");
    let lable1 = document.createElement("lable");
    let lable2 = document.createElement("lable");
    let lable3 = document.createElement("lable");
    let int0 = document.createElement("input");
    let int1 = document.createElement("input");
    let int2 = document.createElement('input');
    let selection3 = document.createElement('select');
    let btnSubmit = document.createElement('div');
    let btnSubmit2 = document.createElement('button');
    let btnClear = document.createElement('div');
    let copyRigth = document.createElement('div');

    copyRigth.innerHTML = "develop by sanuja rajapaksha";
    copyRigth.classList.add("copyRigth")

    lodingForme.setAttribute("name", "submit-to-google-sheet")
    btnSubmit2.type = "submit";
    btnSubmit2.innerHTML = "submit Deta";
    selection3.name = "Gender"
    lodingSection.classList.add("lodingSection");
    BODYCONTAIN.classList.add("loding");
    BODYCONTAIN.classList.add("flex");
    rq0.classList.add("requadBox");
    rq1.classList.add("requadBox");
    rq2.classList.add("requadBox");
    rq3.classList.add("requadBox");
    rq4.classList.add("requadBox");
    rq4.classList.add("flex");
    lable0.classList.add("lable");
    lable1.classList.add("lable");
    lable2.classList.add("lable");
    lable3.classList.add("lable");
    selection3.classList.add("spacelSelection");
    selection3.classList.add("flex");
    selection3.classList.add("pointer");
    int2.classList.add("pointer");
    btnSubmit.classList.add("pointer");
    btnSubmit.classList.add("btnAction");
    btnSubmit.classList.add("flex");
    btnSubmit.classList.add("submit");
    btnClear.classList.add("pointer");
    btnClear.classList.add("btnAction");
    btnClear.classList.add("flex");
    FormeFrame.classList.add("FormeFrame");
    FFrame.classList.add("FrameBoxContain");
    FFrame.classList.add("flex");
    FFrameN.classList.add("FrameName");
    FFrameL.classList.add("FrameLogo");

    int0.placeholder = "A.B.C. Chamara Weerasinha";
    int1.placeholder = "076 1111 111";
    int0.setAttribute("name", "Name");
    int1.setAttribute("name", "Phone_Number");
    int2.setAttribute("name", "BirtDay");
    int2.type = "date";
    lable0.innerHTML = "<i class='fa-solid fa-user-alt'></i>full name";
    lable1.innerHTML = "<i class='fa-solid fa-phone'></i>phone number";
    lable2.innerHTML = "<i class='fa-solid fa-calendar'></i>date of birth";
    lable3.innerHTML = "<i class='fa-solid fa-transgender'></i>gender";

    btnSubmit.innerHTML = "<i class=''></i>submit";
    btnClear.innerHTML = "<i class=''></i>cancle";
    FFrameN.innerHTML = "Dark wizard";

    let Gender = ['select', "male", "female"];

    btnSubmit2.style.display = 'none';

    Gender.forEach((element) => {
        let option = document.createElement('option');
        option.value = element;
        option.innerHTML = element;
        selection3.appendChild(option);
    });

    btnClear.addEventListener("click", () => {
        int0.value = '';
        int1.value = '';
        int2.value = '';
        selection3.value = 'select';
    })
    btnSubmit.addEventListener("click", () => {
        if (selection3.value != 'select' & int2.value != '' & int0.value.trim() != '' & int1.value.trim() != "" & int1.value.trim().split("").length == 10 & btnSubmit.innerText.toLocaleLowerCase() == 'submit') {
            btnSubmit.innerText = "loding ..";

            let PersonName = int0.value.trim();
            // ---------------- Seta Submit -------------------------
            const url = "https://script.google.com/macros/s/AKfycbwAD10SPiDZvUZEF997rvH4kN9hy0vdfCRiRCUW7yHP1sIVJXQLBpamz5hGNe5nK2gSeQ/exec"

            function outputData(IndexOFPerfon) {
                let DetaDisplayContent = document.createElement('div');
                let DetaDisplayContentBox = document.createElement('div');
                let DetaDisplayContentLogoBox = document.createElement('div');
                let DetaDisplayContentLogo = document.createElement('div');
                let DetaDisplayContentLogoSpeek = document.createElement('div');
                let DetaDCBoxS = document.createElement('div');
                let DetaDCBox0 = document.createElement('div');
                let DetaDCBox1 = document.createElement('div');
                let cancleBtn = document.createElement('div');

                DetaDisplayContent.classList.add("DetaRBC");
                DetaDisplayContent.classList.add("flex");
                DetaDisplayContentBox.classList.add("DetaRBCBox");
                DetaDisplayContentBox.classList.add("flex");
                DetaDisplayContentLogoBox.classList.add("DetaRBCBoxL");
                DetaDisplayContentLogoBox.classList.add("flex");
                DetaDisplayContentLogo.classList.add("DetaRBCBoxLLogo");
                DetaDisplayContentLogoSpeek.classList.add("DetaRBCBoxLL_speek");
                DetaDCBoxS.classList.add("DetaDisplaySection");
                DetaDCBox0.classList.add("DetaDisplaySectionRQB");
                DetaDCBox1.classList.add("DetaDisplaySectionRQBS");
                cancleBtn.classList.add("pointer");
                cancleBtn.classList.add("flex");
                cancleBtn.classList.add("btnAction");
                cancleBtn.classList.add("btnCancle");

                DetaDCBox0.innerHTML = `hellow! <br><span class='Textgap'></span> ${PersonName}`;
                DetaDCBox1.innerHTML = `please save your index number before closing this window <br> <div class='Indexcode'>....</div>`;
                cancleBtn.innerHTML = `close`;
                document.querySelector("body").appendChild(DetaDisplayContent);
                DetaDisplayContent.appendChild(DetaDisplayContentBox);
                DetaDisplayContentBox.appendChild(DetaDisplayContentLogoBox);
                DetaDisplayContentBox.appendChild(DetaDCBoxS);
                DetaDCBoxS.appendChild(DetaDCBox0);
                DetaDCBoxS.appendChild(DetaDCBox1);
                DetaDCBoxS.appendChild(cancleBtn);
                DetaDisplayContentLogoBox.appendChild(DetaDisplayContentLogo);
                DetaDisplayContentLogoBox.appendChild(DetaDisplayContentLogoSpeek);
                cancleBtn.addEventListener("click", () => {
                    DetaDisplayContentBox.style.scale = 0;

                    setTimeout(() => {
                        DetaDisplayContent.remove();
                        location.reload();
                    }, 300);
                })

                setTimeout(() => {
                    DetaDisplayContentBox.style.scale = 1;

                }, 100);
                console.clear();
                setTimeout(() => {

                    IndexOFPerfon.forEach((element, i) => {
                        if (element[0] == PersonName) {
                            console.log("person Index ", ":", i);
                            // -------------Member Number ----------------------------
                            if (`${i}`.split("").length == 3) {
                                DetaDCBox1.innerHTML = `please save your index number before closing this window <br> <div class='Indexcode'>${i}</div>`;

                            } else if (`${i}`.split("").length == 2) {
                                DetaDCBox1.innerHTML = `please save your index number before closing this window <br> <div class='Indexcode'>0${i}</div>`;

                            } else if (`${i}`.split("").length == 1) {
                                DetaDCBox1.innerHTML = `please save your index number before closing this window <br> <div class='Indexcode'>00${i}</div>`;

                            }
                        }
                    });

                }, 300);
            }



            const scriptURL = 'https://script.google.com/macros/s/AKfycbwAD10SPiDZvUZEF997rvH4kN9hy0vdfCRiRCUW7yHP1sIVJXQLBpamz5hGNe5nK2gSeQ/exec'
            const form = document.forms['submit-to-google-sheet']

            form.addEventListener('submit', e => {
                e.preventDefault()

                fetch(scriptURL, { method: 'POST', body: new FormData(form) })
                    .then(response => {
                        if (response.status === 200) {
                            console.log('Success!', response)
                            document.forms['submit-to-google-sheet'].reset()
                            console.log("Success ............");

                            fetch(url).then(res => res.json()).then(data => {
                                console.log(data.length - 1)
                                const headings = data[0];
                                const rows = data.slice(1).reverse();
                                outputData(data)

                            });
                        }
                        console.clear();
                    })
                    .catch(error => { ALERTCALL("E", 'Detabase Error <br> try again later'); console.clear(); });
            })
            btnSubmit2.click();
        } else if (int1.value.split("").length < 10 || int1.value.split("").length > 10 & int1.value.split("").length > 1) {
            ALERTCALL("t", "invalid Phone Number")
        } else if (int0.value.trim() == "" || int1.value.trim() == "" || selection3.value == 'select' || int2.value == '') {
            ALERTCALL("t", "please fill all")
        }

    })

    BODYCONTAIN.appendChild(FormeFrame);
    FormeFrame.appendChild(FFrame);
    FFrame.appendChild(FFrameL);
    FFrame.appendChild(FFrameN);
    FormeFrame.appendChild(lodingSection);
    FormeFrame.appendChild(copyRigth);
    lodingSection.appendChild(lodingForme);
    lodingForme.appendChild(rq0);
    lodingForme.appendChild(rq1);
    lodingForme.appendChild(rq2);
    lodingForme.appendChild(rq3);
    lodingForme.appendChild(rq4);
    lodingForme.appendChild(btnSubmit2);
    rq0.appendChild(lable0);
    rq1.appendChild(lable1);
    rq2.appendChild(lable2);
    rq3.appendChild(lable3);
    rq0.appendChild(int0);
    rq1.appendChild(int1);
    rq2.appendChild(int2);
    rq3.appendChild(selection3);
    rq4.appendChild(btnClear);
    rq4.appendChild(btnSubmit);

}

//ALERTCALL("E", "error message")

function ALERTCALL(type, message) {
    let Box = document.createElement("div");
    let proggresLine = document.createElement("div");
    let MessageSection = document.createElement("div");

    if (type.toLocaleUpperCase() == "E") {
        Box.style.borderColor = "red";
        proggresLine.style.backgroundColor = "red";
    } else if (type.toLocaleUpperCase() == "T") {
        Box.style.borderColor = "yellowgreen";
        proggresLine.style.backgroundColor = "yellowgreen";
    }

    Box.classList.add("alertSection");
    proggresLine.classList.add("proggressline");
    MessageSection.classList.add("AlertMessage");

    MessageSection.innerHTML = ` ${message}`;

    document.querySelector("body").appendChild(Box);

    Box.appendChild(MessageSection);
    Box.appendChild(proggresLine);

    setTimeout(() => {
        proggresLine.classList.add("close")
        Box.style.right = '5vh';
    }, 100)

    setTimeout(() => {
        Box.style.right = '-150vh';
    }, 1800)
    setTimeout(() => {
        Box.remove();
    }, 1850)

}