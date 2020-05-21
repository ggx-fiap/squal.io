function initData() {
  jimData.variables["oc_OO_TF"] = "1";
  jimData.variables["verifyTransfer"] = "";
  jimData.variables["totalCH"] = "2033.66";
  jimData.variables["TransferRecipientName"] = "";
  jimData.variables["totalSV"] = "2620.00";
  jimData.variables["TransferSendingAcc"] = "";
  jimData.variables["totalCA"] = "1742.66";
  jimData.variables["total Available"] = "6396.32";
  jimData.variables["TransferDestinationAcc"] = "";
  jimData.variables["TransferAmount"] = "";
  jimData.variables["TransferConcept"] = "";
  jimData.variables["listColor"] = "0";
  jimData.variables["TransferDate"] = "";
  jimData.variables["oc_OO_CL"] = "1";
  jimData.datamasters["ChristopherAccount"] = [
    {
      "id": 1,
      "datamaster": "ChristopherAccount",
      "userdata": {
        "Timestamp": "00:00",
        "Locutor": "Pedro",
        "Texto": "Alô, Vitor? Tudo bom?"
      }
    },
    {
      "id": 2,
      "datamaster": "ChristopherAccount",
      "userdata": {
        "Timestamp": "00:01",
        "Locutor": "Vitor",
        "Texto": "Alô, está me ouvindo?"
      }
    },
    {
      "id": 3,
      "datamaster": "ChristopherAccount",
      "userdata": {
        "Timestamp": "00:01",
        "Locutor": "Pedro",
        "Texto": "Estou te ouvindo, mas está um pouco baixo"
      }
    },
    {
      "id": 4,
      "datamaster": "ChristopherAccount",
      "userdata": {
        "Timestamp": "00:02",
        "Locutor": "Vitor",
        "Texto": "Meu microfone não está muito bom, preciso arranjar outro."
      }
    },
    {
      "id": 5,
      "datamaster": "ChristopherAccount",
      "userdata": {
        "Timestamp": "00:02",
        "Locutor": "Pedro",
        "Texto": "Bom, se eu não entender alguma coisa posso ler depois na transcrição."
      }
    },
    {
      "id": 6,
      "datamaster": "ChristopherAccount",
      "userdata": {
        "Timestamp": "00:04",
        "Locutor": "Vitor",
        "Texto": "Verdade. Eu te chamei pois tenho dúvidas sobre minha última tarefa no projeto."
      }
    },
    {
      "id": 7,
      "datamaster": "ChristopherAccount",
      "userdata": {
        "Timestamp": "00:05",
        "Locutor": "Pedro",
        "Texto": "Ok. Vou abrir a documentação e nós revemos os requisitos juntos."
      }
    },
    {
      "id": 8,
      "datamaster": "ChristopherAccount",
      "userdata": {
        "Timestamp": "00:06",
        "Locutor": "Vitor",
        "Texto": "Perfeito. O primeiro requisito..."
      }
    }
  ];

  jimData.datamasters["CurrentAccount"] = [
    {
      "id": 1,
      "datamaster": "CurrentAccount",
      "userdata": {
        "Timestamp": "00:00",
        "Locutor": "Pedro",
        "Texto": "Oi Douglas, boa tarde"
      }
    },
    {
      "id": 2,
      "datamaster": "CurrentAccount",
      "userdata": {
        "Timestamp": "00:00",
        "Locutor": "Douglas",
        "Texto": "Boa tarde"
      }
    },
    {
      "id": 3,
      "datamaster": "CurrentAccount",
      "userdata": {
        "Timestamp": "00:01",
        "Locutor": "Pedro",
        "Texto": "Conseguiu confirmar o orçamento com o cliente?"
      }
    },
    {
      "id": 4,
      "datamaster": "CurrentAccount",
      "userdata": {
        "Timestamp": "00:01",
        "Locutor": "Douglas",
        "Texto": "Sim, consegui. Mas ele que mudar alguns pontos do projeto."
      }
    },
    {
      "id": 5,
      "datamaster": "CurrentAccount",
      "userdata": {
        "Timestamp": "00:02",
        "Locutor": "Pedro",
        "Texto": "Devemos reavaliar o escopo então. As mudanças são significativas?"
      }
    },
    {
      "id": 6,
      "datamaster": "CurrentAccount",
      "userdata": {
        "Timestamp": "00:03",
        "Locutor": "Douglas",
        "Texto": "Algumas sim. Estou preparando um documento com todos os requisitos."
      }
    },
    {
      "id": 7,
      "datamaster": "CurrentAccount",
      "userdata": {
        "Timestamp": "00:03",
        "Locutor": "Pedro",
        "Texto": "Ok, encaminhe por email quando estiver terminado."
      }
    },
    {
      "id": 8,
      "datamaster": "CurrentAccount",
      "userdata": {
        "Timestamp": "00:04",
        "Locutor": "Douglas",
        "Texto": "Combinado. Sobre o outro projeto..."
      }
    }
  ];

  jimData.datamasters["SavingsAccount"] = [
    {
      "id": 1,
      "datamaster": "SavingsAccount",
      "userdata": {
        "Timestamp": "00:00",
        "Locutor": "Pedro",
        "Texto": "Boa tarde."
      }
    },
    {
      "id": 2,
      "datamaster": "SavingsAccount",
      "userdata": {
        "Timestamp": "00:01",
        "Locutor": "Gaston",
        "Texto": "Boa tarde. Podemos começar a reunião?"
      }
    },
    {
      "id": 3,
      "datamaster": "SavingsAccount",
      "userdata": {
        "Timestamp": "00:01",
        "Locutor": "Pedro",
        "Texto": "Sim, o Douglas não irá mais participar, está preso em  outra reunião."
      }
    },
    {
      "id": 4,
      "datamaster": "SavingsAccount",
      "userdata": {
        "Timestamp": "00:02",
        "Locutor": "Gaston",
        "Texto": "Não precisamos da aprovação dele para fechar estes detalhes?"
      }
    },
    {
      "id": 5,
      "datamaster": "SavingsAccount",
      "userdata": {
        "Timestamp": "00:02",
        "Locutor": "Pedro",
        "Texto": "Ele pode ler a transcrição da reunião depois e falar com a gente se discordar de algum detalhe."
      }
    },
    {
      "id": 6,
      "datamaster": "SavingsAccount",
      "userdata": {
        "Timestamp": "00:03",
        "Locutor": "Gaston",
        "Texto": "Ok. Qual o primeiro item?"
      }
    },
    {
      "id": 7,
      "datamaster": "SavingsAccount",
      "userdata": {
        "Timestamp": "00:04",
        "Locutor": "Pedro",
        "Texto": "Primeiro temos que reavaliar o design. O logo mudou e com ele a paleta de cores."
      }
    },
    {
      "id": 8,
      "datamaster": "SavingsAccount",
      "userdata": {
        "Timestamp": "00:04",
        "Locutor": "Gaston",
        "Texto": "Certo, vamos ver como podemos melhorar..."
      }
    }
  ];

  jimData.isInitialized = true;
}