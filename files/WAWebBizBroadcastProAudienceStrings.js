__d(
  "WAWebBizBroadcastProAudienceStrings",
  ["fbt", "WAWebBroadcastConsts", "WDSTextualLink.react", "react"],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e,
      u = e || (e = o("react"));
    function c() {
      return s._(/*BTDS*/ "Create audience");
    }
    c.displayName = c.name + " [from " + i.id + "]";
    function d() {
      return s._(
        /*BTDS*/ "All customers subscribed to marketing messages in this list have chosen to receive them from my business, and all data in this list complies with {=m1} .",
        [
          s._implicitParam(
            "=m1",
            u.jsx(r("WDSTextualLink.react"), {
              href: o("WAWebBroadcastConsts").WHATSAPP_BUSINESS_POLICY_URL,
              children: s._(/*BTDS*/ "policy guidelines for WhatsApp"),
            }),
          ),
        ],
      );
    }
    d.displayName = d.name + " [from " + i.id + "]";
    function m() {
      return s._(/*BTDS*/ "Add");
    }
    m.displayName = m.name + " [from " + i.id + "]";
    function p() {
      return s._(/*BTDS*/ "Choose an audience");
    }
    p.displayName = p.name + " [from " + i.id + "]";
    function _() {
      return s._(/*BTDS*/ "Add recipients");
    }
    _.displayName = _.name + " [from " + i.id + "]";
    function f() {
      return s._(/*BTDS*/ "Remove recipients");
    }
    f.displayName = f.name + " [from " + i.id + "]";
    function g() {
      return s._(/*BTDS*/ "Remove");
    }
    g.displayName = g.name + " [from " + i.id + "]";
    function h() {
      return s._(/*BTDS*/ "Your changes couldn't be saved. Please try again.");
    }
    h.displayName = h.name + " [from " + i.id + "]";
    function y() {
      return s._(/*BTDS*/ "Your audience couldn't be saved. Please try again.");
    }
    y.displayName = y.name + " [from " + i.id + "]";
    function C() {
      return s._(/*BTDS*/ "Your audience is too small");
    }
    C.displayName = C.name + " [from " + i.id + "]";
    function b() {
      return s._(/*BTDS*/ "broadcast settings");
    }
    b.displayName = b.name + " [from " + i.id + "]";
    function v(e, t) {
      return s._(
        /*BTDS*/ '_j{"*":"Select at least {number} recipients to continue. If you need to create smaller audiences, turn off advanced tools in {broadcast_settings}.","_1":"Select at least 1 recipient to continue. If you need to create smaller audiences, turn off advanced tools in {broadcast_settings}."}',
        [s._plural(e, "number"), s._param("broadcast_settings", t)],
      );
    }
    v.displayName = v.name + " [from " + i.id + "]";
    function S() {
      return s._(/*BTDS*/ "OK");
    }
    S.displayName = S.name + " [from " + i.id + "]";
    function R(e, t) {
      return s._(
        /*BTDS*/ '_j{"*":"Upload a file with at least {number} recipients to continue. If you need to create smaller audiences, turn off advanced tools in {broadcast_settings}.","_1":"Upload a file with at least 1 recipient to continue. If you need to create smaller audiences, turn off advanced tools in {broadcast_settings}."}',
        [s._plural(e, "number"), s._param("broadcast_settings", t)],
      );
    }
    R.displayName = R.name + " [from " + i.id + "]";
    function L() {
      return s._(/*BTDS*/ "Upload new file");
    }
    L.displayName = L.name + " [from " + i.id + "]";
    function E() {
      return s._(/*BTDS*/ "Cancel");
    }
    E.displayName = E.name + " [from " + i.id + "]";
    function k(e, t) {
      return s._(
        /*BTDS*/ '_j{"*":"Upload a CSV or Excel file with at least {number} recipients\' names and phone numbers. For best results, {template_link}.","_1":"Upload a CSV or Excel file with at least 1 recipient\'s name and phone number. For best results, {template_link}."}',
        [s._plural(e, "number"), s._param("template_link", t)],
      );
    }
    k.displayName = k.name + " [from " + i.id + "]";
    function I(e, t) {
      return e <= 0
        ? s._(
            /*BTDS*/ "Upload a CSV or Excel file with your recipients' phone numbers. For best results, {template_link}.",
            [s._param("template_link", t)],
          )
        : s._(
            /*BTDS*/ '_j{"*":"Upload a CSV or Excel file with at least {number} recipients\' phone numbers. For best results, {template_link}.","_1":"Upload a CSV or Excel file with at least 1 recipient\'s phone number. For best results, {template_link}."}',
            [s._plural(e, "number"), s._param("template_link", t)],
          );
    }
    I.displayName = I.name + " [from " + i.id + "]";
    function T() {
      return s._(/*BTDS*/ "Go back");
    }
    function D() {
      return s._(/*BTDS*/ "Choose recipients to add");
    }
    D.displayName = D.name + " [from " + i.id + "]";
    function x() {
      return s._(/*BTDS*/ "Choose recipients to remove");
    }
    x.displayName = x.name + " [from " + i.id + "]";
    function $(e) {
      return s._(/*BTDS*/ '_j{"*":"{number} selected","_1":"1 selected"}', [
        s._plural(e, "number"),
      ]);
    }
    $.displayName = $.name + " [from " + i.id + "]";
    function P() {
      return s._(/*BTDS*/ "Search name or number");
    }
    P.displayName = P.name + " [from " + i.id + "]";
    function N() {
      return s._(/*BTDS*/ "Search number");
    }
    N.displayName = N.name + " [from " + i.id + "]";
    function M() {
      return s._(/*BTDS*/ "Contact list");
    }
    function w(e) {
      return s._(/*BTDS*/ "Select recipient {recipient phone number}", [
        s._param("recipient phone number", e),
      ]);
    }
    function A() {
      return s._(/*BTDS*/ "Load more");
    }
    A.displayName = A.name + " [from " + i.id + "]";
    function F() {
      return s._(/*BTDS*/ "Loading\u2026");
    }
    F.displayName = F.name + " [from " + i.id + "]";
    function O(e) {
      return s._(/*BTDS*/ "Delete {audience name}?", [
        s._param("audience name", e),
      ]);
    }
    O.displayName = O.name + " [from " + i.id + "]";
    function B() {
      return s._(
        /*BTDS*/ "This audience and its thread will be permanently deleted and cannot be restored.",
      );
    }
    B.displayName = B.name + " [from " + i.id + "]";
    function W() {
      return s._(/*BTDS*/ "Audience deleted");
    }
    W.displayName = W.name + " [from " + i.id + "]";
    function q() {
      return s._(/*BTDS*/ "Processing your audience\u2026");
    }
    q.displayName = q.name + " [from " + i.id + "]";
    function U() {
      return s._(/*BTDS*/ "We'll update you when it's complete.");
    }
    U.displayName = U.name + " [from " + i.id + "]";
    function V() {
      return s._(
        /*BTDS*/ "Your edits are processing. We'll update you when they're complete.",
      );
    }
    ((V.displayName = V.name + " [from " + i.id + "]"),
      (l.getCreateAudienceButtonLabel = c),
      (l.getMarketingConsentCheckboxLabel = d),
      (l.getAddSelectedAudiencesButtonLabel = m),
      (l.getChooseAnAudienceDialogTitle = p),
      (l.getAddRecipientsLabel = _),
      (l.getRemoveRecipientsLabel = f),
      (l.getRemoveRecipientsButtonLabel = g),
      (l.getEditAudienceFailureToastMessage = h),
      (l.getCreateAudienceFailureToastMessage = y),
      (l.getAudienceTooSmallTitle = C),
      (l.getBroadcastSettingsReference = b),
      (l.getAudienceTooSmallSelectBody = v),
      (l.getAudienceTooSmallDismissLabel = S),
      (l.getAudienceTooSmallUploadBody = R),
      (l.getAudienceTooSmallUploadNewFileLabel = L),
      (l.getAudienceTooSmallCancelLabel = E),
      (l.getImportAudienceMinRecipientsDescription = k),
      (l.getImportAudiencePhoneOnlyDescription = I),
      (l.getGoBackAriaLabel = T),
      (l.getChooseRecipientsToAddHeader = D),
      (l.getChooseRecipientsToRemoveHeader = x),
      (l.getSelectedCountSubtitle = $),
      (l.getSearchPlaceholder = P),
      (l.getSearchByNumberPlaceholder = N),
      (l.getContactListAriaLabel = M),
      (l.getSelectRecipientAriaLabel = w),
      (l.getLoadMorePaginationLabel = A),
      (l.getLoadingPaginationLabel = F),
      (l.getDeleteAudienceModalTitle = O),
      (l.getDeleteAudienceModalBody = B),
      (l.getAudienceDeletedToastMessage = W),
      (l.getAudienceProcessingTitle = q),
      (l.getAudienceProcessingSubtitle = U),
      (l.getAudienceEditsProcessingMessage = V));
  },
  226,
);
