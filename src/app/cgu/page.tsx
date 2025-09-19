import { Footer } from "@/app/_partials/footer";
import { Header } from "@/app/components/header";
import { Text } from "@/app/components/text";
export default function CGU() {
  return (
    <div>
      <Header />
      <div className="flex flex-col gap-4 p-4 items-start">
        <h1 className="text-2xl font-bold">
          Conditions Générales d&apos;Utilisation
        </h1>

        <Text>Dernière mise à jour : 19/09/2025</Text>

        <Text className="text-left">
          Les présentes Conditions Générales d&apos;Utilisation (CGU) ont pour
          objet de définir les modalités et conditions d&apos;utilisation de
          l&apos;application <strong>Native Vibe</strong>. En accédant à
          l&apos;application, vous acceptez sans réserve ces conditions.
        </Text>

        <h2 className="text-xl font-semibold">1. Objet du service</h2>
        <Text className="text-left">
          Native Vibe est une application d&apos;apprentissage de l&apos;anglais
          visant à proposer des contenus éducatifs, des exercices et des
          ressources linguistiques à ses utilisateurs.
        </Text>

        <h2 className="text-xl font-semibold">2. Inscription et compte</h2>
        <Text className="text-left">
          Pour accéder à certaines fonctionnalités, l&apos;utilisateur doit
          créer un compte avec une adresse e-mail valide. L&apos;utilisateur est
          responsable de la confidentialité de ses identifiants et de toute
          activité réalisée via son compte.
        </Text>

        <h2 className="text-xl font-semibold">
          3. Utilisation de l&apos;application
        </h2>
        <Text className="text-left">
          L&apos;utilisateur s&apos;engage à utiliser l&apos;application de
          manière conforme aux lois en vigueur et à ne pas porter atteinte aux
          droits de tiers ni compromettre la sécurité ou le bon fonctionnement
          du service.
        </Text>

        <h2 className="text-xl font-semibold">4. Propriété intellectuelle</h2>
        <Text className="text-left">
          Tous les contenus proposés (textes, exercices, graphismes, logos,
          etc.) sont protégés par le droit d&apos;auteur. Toute reproduction,
          diffusion ou utilisation non autorisée est interdite.
        </Text>

        <h2 className="text-xl font-semibold">5. Responsabilités</h2>
        <Text className="text-left">
          Native Vibe met tout en œuvre pour assurer un service fiable et de
          qualité, mais ne saurait être tenu responsable en cas de dommages liés
          à l&apos;utilisation de l&apos;application, d&apos;erreurs dans les
          contenus ou d&apos;interruption du service.
        </Text>

        <h2 className="text-xl font-semibold">6. Données personnelles</h2>
        <Text className="text-left">
          Le traitement des données personnelles est régi par notre{" "}
          <a href="/politique-de-confidentialite" className="underline">
            Politique de Confidentialité
          </a>
          .
        </Text>

        <h2 className="text-xl font-semibold">7. Résiliation</h2>
        <Text className="text-left">
          L&apos;utilisateur peut à tout moment supprimer son compte. Native
          Vibe se réserve le droit de suspendre ou de résilier un compte en cas
          d&apos;utilisation abusive ou frauduleuse du service.
        </Text>

        <h2 className="text-xl font-semibold">8. Modification des CGU</h2>
        <Text className="text-left">
          Native Vibe peut modifier les présentes CGU à tout moment. Toute
          modification sera notifiée via l&apos;application ou par e-mail.
        </Text>

        <h2 className="text-xl font-semibold">9. Contact</h2>
        <Text className="text-left">
          Pour toute question concernant ces CGU, vous pouvez nous écrire à : 📧{" "}
          <strong>contact@nativevibe.fr</strong>
        </Text>
      </div>
      <Footer />
    </div>
  );
}
