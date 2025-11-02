import { Modal, Divider, Input, Button, message } from "antd";
import { useRef, useState } from "react";
import { IoGiftSharp, IoSendOutline } from "react-icons/io5";
import emailjs from "@emailjs/browser";
import Lottie from "react-lottie";
import animationData from "./gift.json";
import loveAnimation from "./loveAnimation.json";
import "./Gifts.scss";

const { TextArea } = Input;

type Gift = {
  name: string;
  imgUrl: string;
  price?: number;
  qrCode: string;
};

interface GiftModalProps {
  gift: Gift | null;
  onClose: () => void;
}

const GiftModal: React.FC<GiftModalProps> = ({ gift, onClose }) => {
  const [loading, setLoading] = useState<boolean>(false);
  const [name, setName] = useState<string>("");
  const [messageTxt, setMessageTxt] = useState<string>("");
  const form = useRef<any>(null);

  const sendEmail = (e: any) => {
    e.preventDefault();
    setLoading(true);

    // emailjs
    //   .sendForm(
    //     "service_44ssobe",
    //     "template_iotmavq",
    //     form.current,
    //     "Uxk454g_u9hrTkmnR"
    //   )
    //   .then(
    //     result => {
    //       message.success("Mensagem enviada com sucesso!");
    //     },
    //     error => {
    //       alert("Erro");
    //       message.error("Erro, tente novamente mais tarde.");
    //     }
    //   )
    //   .finally(() => {
    //     setLoading(false);
    //     setName("");
    //     setMessageTxt("");
    //   });
  };

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  if (!gift) return null;

  return (
    <Modal
      footer={null}
      title={
        <h2 style={{ color: "#2F4858" }}>
          <IoGiftSharp className="icon" />
          {gift.name}
        </h2>
      }
      visible={true}
      onCancel={onClose}
      width={900}
    >
      <div className="modalContainer">
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <h2 className="paymentDescription">
            Para realizar a transferência de{" "}
            {gift.price ? `R$ ${gift.price}` : "qualquer valor"} utilize a
            função 'Ler QRcode' do seu aplicativo de banco:
          </h2>
          <img
            style={{ height: "15em", width: "15em" }}
            src={gift.qrCode}
            alt={`QR Code para ${gift.name}`}
          />
          <p style={{ marginTop: "1em" }}>
            ou, utilize a nossa chave pix (ATUALIZAR COM SUA CHAVE PIX)
          </p>
        </div>
        <Divider type="vertical" />

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "10px",
          }}
        >
          <h2 className="paymentDescription">
            <Lottie
              options={{
                ...defaultOptions,
                animationData: loveAnimation,
              }}
              height={70}
              width={70}
            />
            Deixe uma mensagem para o casal
          </h2>

          <form className={"form"} ref={form} onSubmit={sendEmail}>
            <label>Nome:</label>
            <Input
              onChange={e => setName(e.target.value)}
              value={name}
              name="from_name"
              placeholder="Nome"
            />

            <label>Mensagem:</label>
            <TextArea
              onChange={e => setMessageTxt(e.target.value)}
              value={messageTxt}
              name="message"
              placeholder="Mensagem..."
              rows={5}
            />
            <Button
              htmlType="submit"
              size="large"
              style={{
                display: "flex",
                gap: "5px",
                alignItems: "center",
                color: "white",
                backgroundColor: "#345870",
                justifyContent: "center",
              }}
              loading={loading}
            >
              <IoSendOutline />
              Enviar
            </Button>
          </form>
        </div>
      </div>
    </Modal>
  );
};

export default GiftModal;
