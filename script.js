function Legal() {

    alert("Botao legal!");

}

function mostrar() {
    let nome = document.getElementById("nome").value;

    document.getElementById("resultado").textContent =
        "Olá, " + nome + "!";
}


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

    } else {

        console.log(
            "Visita registrada com sucesso!"
        );

        mostrarVisitantes();

    }

}


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

        document.getElementById(
            "contadorVisitantes"
        ).textContent = "ERRO";

        return;
    }

    console.log(
        "Quantidade de visitantes:",
        count
    );

    document.getElementById(
        "contadorVisitantes"
    ).textContent = count;
}


registrarVisita();
