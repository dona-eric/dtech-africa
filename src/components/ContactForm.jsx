import React, { useState } from "react";
import { Loader2, CheckCircle, XCircle } from "lucide-react";
import { api } from "../api/api";


export default function ContactForm() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState(null);

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const validateEmail = (email) => /\S+@\S+\.\S+/.test(email);


  const handleSubmit = async e => {
      e.preventDefault();
      setStatus("sending");
      try {
        await api.postContact(form);
        setStatus("success");
        setForm({ name: "", email: "", message: "" });
      } catch (err) {
        setStatus("error");
      }
    };

  return (
    <div className="bg-white p-6 rounded-lg shadow">
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm">Nom</label>
          <input
            name="name"
            value={form.name}
            onChange={handleChange}
            className="w-full mt-1 p-2 border rounded focus:ring focus:ring-sky-200"
            placeholder="Votre nom complet"
          />
        </div>
        <div>
          <label className="block text-sm">Email</label>
          <input
            name="email"
            type="email"
            value={form.email}
            onChange={handleChange}
            className="w-full mt-1 p-2 border rounded focus:ring focus:ring-sky-200"
            placeholder="exemple@email.com"
          />
        </div>
        <div>
          <label className="block text-sm">Message</label>
          <textarea
            name="message"
            value={form.message}
            onChange={handleChange}
            className="w-full mt-1 p-2 border rounded focus:ring focus:ring-sky-200"
            rows={4}
            placeholder="Écrivez votre message ici..."
          />
        </div>
        <div className="flex items-center justify-between">
          <button
            type="submit"
            disabled={status === "sending"}
            className={`px-4 py-2 rounded text-white flex items-center gap-2 ${
              status === "sending"
                ? "bg-sky-400 cursor-not-allowed"
                : "bg-sky-600 hover:bg-sky-700"
            }`}
          >
            {status === "sending" && <Loader2 className="animate-spin w-4 h-4" />}
            {status === "sending" ? "Envoi..." : "Envoyer"}
          </button>

          {status === "sent" && (
            <span className="text-green-600 flex items-center gap-1 text-sm">
              <CheckCircle className="w-4 h-4" /> Message envoyé — merci !
            </span>
          )}
          {status === "error" && (
            <span className="text-red-600 flex items-center gap-1 text-sm">
              <XCircle className="w-4 h-4" /> Erreur, réessayez.
            </span>
          )}
          {status === "invalid" && (
            <span className="text-orange-600 text-sm">
              Email invalide.
            </span>
          )}
          {status === "missing" && (
            <span className="text-orange-600 text-sm">
              Tous les champs sont requis.
            </span>
          )}
        </div>
      </form>

      {/* Coordonnées */}
      
    </div>
  );
}
