import { Footer } from "@/app/_partials/footer";
import { Header } from "@/app/components/header";
import { Text } from "@/app/components/text";
export default function PolitiqueDeConfidentialite() {
  return (
    <div>
      <Header />
      <div className="flex flex-col gap-4 p-4 items-start">
        <h1 className="text-2xl font-bold">Politique de Confidentialité</h1>

        <Text>Dernière mise à jour : 19/09/2025</Text>

        <Text className="text-left">
          Chez <strong>Native Vibe</strong>, la protection de vos données
          personnelles est une priorité. Cette politique explique simplement
          quelles données nous collectons, pourquoi nous les collectons et
          comment elles sont utilisées.
        </Text>

        <h2 className="text-xl font-semibold">1. Données collectées</h2>
        <Text className="text-left">
          Nous collectons uniquement les informations nécessaires pour vous
          offrir une bonne expérience d&apos;apprentissage :
        </Text>
        <ul className="list-disc list-inside space-y-1">
          <li>
            <strong>Informations de compte :</strong> adresse e-mail, nom (si
            vous l&apos;indiquez).
          </li>
          <li>
            <strong>Données d&apos;utilisation :</strong> progression dans
            l&apos;application, préférences d&apos;apprentissage.
          </li>
          <li>
            <strong>Données techniques :</strong> type d&apos;appareil, système
            d&apos;exploitation, identifiants techniques (ex : identifiant
            Firebase pour les notifications).
          </li>
        </ul>
        <Text className="text-left font-bold">
          Nous ne collectons pas de données sensibles (santé, origine, etc.).
        </Text>

        <h2 className="text-xl font-semibold">2. Utilisation des données</h2>
        <Text>Vos données sont utilisées uniquement pour :</Text>
        <ul className="list-disc list-inside space-y-1">
          <li>Créer et gérer votre compte.</li>
          <li>Améliorer l&apos;expérience d&apos;apprentissage.</li>
          <li>Envoyer des notifications (si vous les avez activées).</li>
          <li>
            Vous informer d&apos;éventuelles nouveautés ou mises à jour liées au
            service.
          </li>
        </ul>

        <h2 className="text-xl font-semibold">3. Partage des données</h2>
        <Text className="text-left">
          Vos données ne sont <strong>jamais vendues</strong> à des tiers. Elles
          peuvent être partagées uniquement avec des prestataires techniques
          (hébergement, analytics, envoi d&apos;e-mails), qui s&apos;engagent à
          respecter le RGPD.
        </Text>

        <h2 className="text-xl font-semibold">4. Conservation des données</h2>
        <Text className="text-left">
          Vos données sont conservées tant que vous utilisez le service. Vous
          pouvez demander la suppression de votre compte et de vos données à
          tout moment (voir section 6).
        </Text>

        <h2 className="text-xl font-semibold">5. Sécurité</h2>
        <Text className="text-left">
          Nous mettons en place des mesures techniques et organisationnelles
          pour protéger vos données contre tout accès non autorisé.
        </Text>

        <h2 className="text-xl font-semibold">6. Vos droits</h2>
        <Text className="text-left">
          Conformément au RGPD, vous disposez des droits suivants :
        </Text>
        <ul className="list-disc list-inside space-y-1">
          <li>
            Droit d&apos;accès, de rectification et de suppression de vos
            données.
          </li>
          <li>Droit d&apos;opposition au traitement de vos données.</li>
          <li>Droit à la portabilité de vos données.</li>
        </ul>
        <Text>
          Pour exercer vos droits, contactez-nous :{" "}
          <strong>contact@nativevibe.fr</strong>.
        </Text>

        <h2 className="text-xl font-semibold">7. Contact</h2>
        <Text>
          Si vous avez des questions concernant cette politique, vous pouvez
          nous écrire à : 📧 <strong>contact@nativevibe.fr</strong>
        </Text>
      </div>
      <Footer />
    </div>
  );
}
