__d(
  "BillingMIEditBillingInfoConstants",
  ["fbt", "BillingError"],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e = {
      additionalInvoicingEmailsFieldName: s._(
        /*BTDS*/ "additional invoicing email",
      ),
      additionalInvoicingEmailsFieldNameCap: s._(
        /*BTDS*/ "Additional invoicing email",
      ),
      additionalInvoicingEmailsHeadline: s._(
        /*BTDS*/ "Additional Invoicing Email(s)",
      ),
      additionalInvoicingEmailsLabel: s._(
        /*BTDS*/ "Add email address for invoicing",
      ),
      billingAddressFieldName: s._(/*BTDS*/ "billing address"),
      billingAddressFieldNameCap: s._(/*BTDS*/ "Billing address"),
      billingAddressHeadline: s._(/*BTDS*/ "Billing Address"),
      billingInfoObjectLabel: s._(/*BTDS*/ "Billing information"),
      billingOrgFieldName: s._(/*BTDS*/ "bill-to party"),
      billingOrgFieldNameCap: s._(/*BTDS*/ "Bill-to party"),
      billToPartyEditInfo: s._(
        /*BTDS*/ "Edits to your bill-to party will go into effect at the beginning of the next calendar month.",
      ),
      closeButtonLabel: s._(/*BTDS*/ "Close"),
      confirmButtonLabel: s._(/*BTDS*/ "Confirm"),
      defaultInvoicingEmailsHeadline: s._(
        /*BTDS*/ "Default Invoicing Email(s)",
      ),
      defaultInvoicingEmailsLabel: s._(/*BTDS*/ "Existing invoicing emails"),
      editedActionLabel: s._(/*BTDS*/ "edited"),
      emailAddressPlaceholder: s._(/*BTDS*/ "Email address"),
      fieldNameInMsgList: [
        "billToOrgID",
        "billToAddress",
        "customInvoicingEmails",
        "liableAddress",
        "poNumber",
        "selectedInvoiceGroupID",
        "soldToAddress",
      ],
      invoiceGroupFieldName: s._(/*BTDS*/ "invoice group"),
      invoiceGroupFieldNameCap: s._(/*BTDS*/ "Invoice group"),
      invoiceGroupHeadline: s._(/*BTDS*/ "Invoice Group - Optional"),
      invoiceGroupSelectorLabel: s._(/*BTDS*/ "Select an Invoice Group"),
      liableAddressFieldName: s._(/*BTDS*/ "liable address"),
      liableAddressFieldNameCap: s._(/*BTDS*/ "Liable address"),
      liableAddressHeadline: s._(/*BTDS*/ "Liable Address"),
      nextButtonLabel: s._(/*BTDS*/ "Next"),
      noGroupSelectedKey: "none",
      noneOfTheAboveLabel: s._(/*BTDS*/ "None of the above"),
      noticeEOMForIndiaAccount: s._(
        /*BTDS*/ "Payment method cannot be changed between 4 days before and 2 days after the end of the month.",
      ),
      orgHeadline: s._(/*BTDS*/ "Bill-to Party"),
      orgSelectorLabel: s._(/*BTDS*/ "Legal entity name"),
      poNumberFieldName: s._(/*BTDS*/ "PO number"),
      poNumberHeadline: s._(/*BTDS*/ "PO Number - Optional"),
      poNumberInputLabel: s._(/*BTDS*/ "Enter a PO number"),
      poNumberRequiredHeadline: s._(/*BTDS*/ "PO Number - Required"),
      requiredFieldError: s._(/*BTDS*/ "This field is required."),
      saveButtonLabel: s._(/*BTDS*/ "Save changes"),
      soldToAddressFieldName: s._(/*BTDS*/ "sold-to address"),
      soldToAddressFieldNameCap: s._(/*BTDS*/ "Sold-to address"),
      soldToAddressHeadline: s._(/*BTDS*/ "Sold-to Address"),
      titleEdit: s._(/*BTDS*/ "Edit Billing Information"),
      titleVerify: s._(/*BTDS*/ "Verify Billing Information"),
      updateCancelButtonLabel: s._(/*BTDS*/ "Cancel Update"),
      updateFailureBody: s._(
        /*BTDS*/ "We weren't able to make updates to your billing information. Please try again.",
      ),
      updateFailureHeadline: s._(
        /*BTDS*/ "Billing information wasn\u2019t updated",
      ),
      updateFailureTitle: s._(/*BTDS*/ "Update unsuccessful"),
      updateInProgressBodyBillTo: function (t) {
        return s._(
          /*BTDS*/ "The bill-to party for this ad account is now {name of new bill-to party}. It may take up to a week before billing information is editable.",
          [s._param("name of new bill-to party", t)],
        );
      },
      updateInProgressBodyMI: function (t) {
        return s._(
          /*BTDS*/ "The monthly invoice for this ad account is now {name of new credit owner}. It may take up to a week before billing information is editable.",
          [s._param("name of new credit owner", t)],
        );
      },
      updateInProgressHeadlineBillTo: s._(
        /*BTDS*/ "Bill-to party update is in progress",
      ),
      updateInProgressHeadlineMI: s._(
        /*BTDS*/ "Monthly invoicing update in progress",
      ),
      updateSuccessBody: function (t) {
        return t.length === 1
          ? s._(
              /*BTDS*/ "Your {name of updated field} was successfully updated.",
              [s._param("name of updated field", u(t[0]))],
            )
          : t.length === 2
            ? s._(
                /*BTDS*/ "Your {first updated field} and {second updated field} were successfully updated.",
                [
                  s._param("first updated field", u(t[0])),
                  s._param("second updated field", u(t[1])),
                ],
              )
            : s._(
                /*BTDS*/ "Your {name of updated fields} were successfully updated.",
                [
                  s._param(
                    "name of updated fields",
                    t
                      .map(function (e) {
                        return u(e);
                      })
                      .filter(Boolean)
                      .join(", "),
                  ),
                ],
              );
      },
      updateSuccessHeadline: function (t) {
        return t.length === 1
          ? s._(/*BTDS*/ "{name of updated field} updated", [
              s._param("name of updated field", c(t[0])),
            ])
          : s._(/*BTDS*/ "Billing information updated");
      },
    };
    function u(t) {
      var n = {
        billToAddress: e.billingAddressFieldName,
        billToOrgID: e.billingOrgFieldName,
        customInvoicingEmails: e.additionalInvoicingEmailsFieldName,
        liableAddress: e.liableAddressFieldName,
        poNumber: e.poNumberFieldName,
        selectedInvoiceGroupID: e.invoiceGroupFieldName,
        soldToAddress: e.soldToAddressFieldName,
      };
      if (n[t] != null) return n[t];
      throw new (r("BillingError"))(
        "Invalid fieldName was passed into getFieldNameLabel",
        "required parameter is missing or invalid",
        { event_action: "enter", event_side: "client_side" },
        { action: "load" },
        "critical_error",
      );
    }
    function c(t) {
      var n = {
        billToAddress: e.billingAddressFieldNameCap,
        billToOrgID: e.billingOrgFieldNameCap,
        customInvoicingEmails: e.additionalInvoicingEmailsFieldNameCap,
        liableAddress: e.liableAddressFieldNameCap,
        poNumber: e.poNumberFieldName,
        selectedInvoiceGroupID: e.invoiceGroupFieldNameCap,
        soldToAddress: e.soldToAddressFieldNameCap,
      };
      if (n[t] != null) return n[t];
      throw new (r("BillingError"))(
        "Invalid fieldName was passed into getFieldNameCapLabel",
        "required parameter is missing or invalid",
        { event_action: "enter", event_side: "client_side" },
        { action: "load" },
        "critical_error",
      );
    }
    var d = e;
    l.default = d;
  },
  226,
);
