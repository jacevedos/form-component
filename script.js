
((d)=>{
    const $form=d.querySelector(".form"),
    $inputs=d.querySelectorAll(".form [required]")
    
    $inputs.forEach(input=>{
        const $span=d.createElement("span");
        $span.id=input.name;
        $span.textContent=input.title;
        $span.classList.add("form-error", "none")
        input.insertAdjacentElement("afterend",$span);
    });

    d.addEventListener("keyup",e=>{
        if(e.target.matches(".form [required]")){
            let $input=e.target,
            pattern=$input.pattern || $input.dataset.pattern;
            
            if(pattern && $input!==""){
                let regex=new RegExp(pattern);
                return !regex.exec($input.value)
                    ?(d.getElementById($input.name).classList.add("is-active"), $form.classList.add("err"))
                    :(d.getElementById($input.name).classList.remove("is-active"), $form.classList.remove("err"))
            }
            if(!pattern){
                return $input.value===""
                ?(d.getElementById($input.name).classList.add("is-active"), $form.classList.add("err"))
                :(d.getElementById($input.name).classList.remove("is-active"), $form.classList.remove("err"))
            }

        }
    });

    d.addEventListener("submit",(e)=>{
        e.preventDefault();
        alert("Enviando formulario")

        // const $loader=d.querySelector(".contact-form-loader")
        // const $response=d.querySelector(".contact-form-response")

        // $loader.classList.remove("none")

        // setTimeout(()=>{
        //     $loader.classList.add("none")
        //     $response.classList.remove("none")
        //     $form.reset()

        //     setTimeout(()=>{$response.classList.add("none")},2000)
        // },3000)
    });

})(document);