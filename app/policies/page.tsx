import Typography from '@/components/ui/typography'

export default function PoliciesPage() {
  return (
    <>
      <Typography variant="h1" className="text-accent mb-4">
        Policies
      </Typography>

      <Typography variant="body">
        The following policies govern the provision of software consulting services by plfx.dev.
        Please review these policies carefully before engaging our services.
      </Typography>

      <Typography variant="h2" className="mt-8 mb-2">
        Service Delivery
      </Typography>
      <Typography variant="body">
        We offer software consulting services in the following formats:
        <ul className="list-disc pl-8 mt-2 mb-4">
          <li>Hourly consulting and development services</li>
          <li>Fixed-price project engagements</li>
          <li>Retainer arrangements</li>
        </ul>

        The specific terms of service delivery, including timelines, deliverables, and acceptance criteria,
        will be detailed in the individual contract or statement of work agreed upon between plfx.dev and the client.
      </Typography>

      <Typography variant="h2" className="mt-8 mb-2">
        Payment Terms
      </Typography>
      <Typography variant="body">
        Payment terms vary based on the engagement type:
        <ul className="list-disc pl-8 mt-2 mb-4">
          <li>For hourly services, invoices are typically issued on a bi-weekly or monthly basis for work completed.</li>
          <li>Fixed-price projects may require a deposit before work commences, with remaining payments tied to milestones or deliverables.</li>
          <li>Retainer arrangements are generally billed in advance for the agreed period.</li>
        </ul>

        Specific payment schedules, methods, and terms will be outlined in the client contract.
        Unless otherwise specified, invoices are due within 14 days of issuance.
      </Typography>

      <Typography variant="h2" className="mt-8 mb-2">
        Refund Policy
      </Typography>
      <Typography variant="body">
        Our refund policy is guided by the following principles:
        <ul className="list-disc pl-8 mt-2 mb-4">
          <li>For hourly services, charges reflect actual time spent on client work and are generally non-refundable.</li>
          <li>For fixed-price projects, refunds may be issued for deliverables that do not meet the agreed specifications, subject to reasonable opportunity to remedy any deficiencies.</li>
          <li>Deposits may be partially refundable based on the amount of work completed if a project is terminated early.</li>
        </ul>

        Each client engagement is governed by its specific contract, which may contain more detailed refund terms.
        We are committed to fair resolution of any disputes regarding service quality or deliverables.
      </Typography>

      <Typography variant="h2" className="mt-8 mb-2">
        Cancellation Policy
      </Typography>
      <Typography variant="body">
        The following cancellation terms apply:
        <ul className="list-disc pl-8 mt-2 mb-4">
          <li>For hourly engagements, we request at least 24 hours' notice for cancellation of scheduled meetings or work sessions.</li>
          <li>For fixed-price projects, early termination terms are specified in the project contract, including any applicable termination fees or notice periods.</li>
          <li>For retainer arrangements, notice periods for cancellation or non-renewal will be specified in the retainer agreement.</li>
        </ul>

        If a client wishes to cancel an engagement, written notice should be provided according to the terms specified in the contract.
        Any work completed up to the point of cancellation will be billed according to the contract terms.
      </Typography>

      {/* <Typography variant="h2" className="mt-8 mb-2">
        Intellectual Property
      </Typography>
      <Typography variant="body">
        Unless explicitly stated otherwise in the client contract:
        <ul className="list-disc pl-8 mt-2 mb-4">
          <li>The client owns all rights to the custom code and deliverables created specifically for their project upon full payment.</li>
          <li>plfx.dev retains rights to general methodologies, frameworks, and non-client-specific code developed during the engagement.</li>
          <li>Pre-existing intellectual property remains with its original owner.</li>
        </ul>

        Detailed intellectual property terms will be included in each client contract.
      </Typography> */}

      <Typography variant="h2" className="mt-8 mb-2">
        Confidentiality
      </Typography>
      <Typography variant="body">
        We treat all client information and project details as confidential. We do not share client-specific information
        without explicit permission, except as required by law or to deliver the agreed services.
        Specific confidentiality terms will be outlined in client contracts, including any applicable NDAs.
      </Typography>

      <Typography variant="h2" className="mt-8 mb-2">
        Policy Updates
      </Typography>
      <Typography variant="body">
        These policies may be updated periodically. Existing clients will be governed by the policies in effect at the time
        their contract was signed, unless both parties agree to adopt updated terms.
      </Typography>

      <Typography variant="h2" className="mt-8 mb-2">
        Policy Conflict Resolution
      </Typography>
      <Typography variant="body">
        Each engagement is governed by a unique and binding contract that is signed by both parties.
        In the event of a conflict between these policies and the contract, the contract will take precedence.
      </Typography>


      <Typography variant="h2" className="mt-8 mb-2">
        Contact Information
      </Typography>
      <Typography variant="body">
        If you have questions about these policies or need to discuss specific terms for your project,
        please contact us at:
        <div className="mt-2">
          <p>Email: jake@plfx.studio</p>
        </div>
      </Typography>

      <div className="text-sm text-gray-500 mt-12 mb-6">
        Last updated: {new Date().toLocaleDateString()}
      </div>
    </>
  )
} 