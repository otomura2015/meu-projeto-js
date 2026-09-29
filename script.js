function Legal() {

    alert("Botao legal!");

}


function mostrar() {

    let nome =
        document.getElementById("nome").value;

    if (nome === "") {

        document.getElementById("resultado").textContent =
            "Você não colocou seu nome!";

        return;
    }

    document.getElementById("resultado").textContent =
        "Olá, " + nome + "!";

}


// SUPABASE

const SUPABASE_URL =
    "https://glkvjaonjxzfaayjvxop.supabase.co";

const SUPABASE_KEY =
    "sb_publishable_isZUj6GHdTnImZKl0946lA_wMqucFIU";

const supabaseClient =
    window.supabase.createClient(
        SUPABASE_URL,
        SUPABASE_KEY
    );


// REGISTRA UMA VISITA

async function registrarVisita() {

    const { data, error } =
        await supabaseClient
            .from("visitas")
            .insert({});

    if (error) {

        console.error(
            "Erro ao registrar visita:",
            error
        );

        return;
    }

    console.log(
        "Visita registrada com sucesso!"
    );

    mostrarVisitantes();
}


// MOSTRA QUANTIDADE DE VISITANTES

async function mostrarVisitantes() {

    const { count, error } =
        await supabaseClient
            .from("visitas")
            .select("*", {
                count: "exact",
                head: true
            });

    if (error) {

        console.error(
            "Erro ao contar visitantes:",
            error
        );

        const contador =
            document.getElementById(
                "contadorVisitantes"
            );

        if (contador) {
            contador.textContent = "ERRO";
        }

        return;
    }

    console.log(
        "Quantidade de visitantes:",
        count
    );

    const contador =
        document.getElementById(
            "contadorVisitantes"
        );

    if (contador) {
        contador.textContent = count;
    }
}


// INICIA O SISTEMA

registrarVisita();
