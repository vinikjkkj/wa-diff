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
    function I() {
      return s._(/*BTDS*/ "Go back");
    }
    function T() {
      return s._(/*BTDS*/ "Choose recipients to add");
    }
    T.displayName = T.name + " [from " + i.id + "]";
    function D() {
      return s._(/*BTDS*/ "Choose recipients to remove");
    }
    D.displayName = D.name + " [from " + i.id + "]";
    function x(e) {
      return s._(/*BTDS*/ '_j{"*":"{number} selected","_1":"1 selected"}', [
        s._plural(e, "number"),
      ]);
    }
    x.displayName = x.name + " [from " + i.id + "]";
    function $() {
      return s._(/*BTDS*/ "Search name or number");
    }
    $.displayName = $.name + " [from " + i.id + "]";
    function P() {
      return s._(/*BTDS*/ "Search number");
    }
    P.displayName = P.name + " [from " + i.id + "]";
    function N() {
      return s._(/*BTDS*/ "Contact list");
    }
    function M(e) {
      return s._(/*BTDS*/ "Select recipient {recipient phone number}", [
        s._param("recipient phone number", e),
      ]);
    }
    function w() {
      return s._(/*BTDS*/ "Load more");
    }
    w.displayName = w.name + " [from " + i.id + "]";
    function A() {
      return s._(/*BTDS*/ "Loading\u2026");
    }
    A.displayName = A.name + " [from " + i.id + "]";
    function F(e) {
      return s._(/*BTDS*/ "Delete {audience name}?", [
        s._param("audience name", e),
      ]);
    }
    F.displayName = F.name + " [from " + i.id + "]";
    function O() {
      return s._(
        /*BTDS*/ "This audience and its thread will be permanently deleted and cannot be restored.",
      );
    }
    O.displayName = O.name + " [from " + i.id + "]";
    function B() {
      return s._(/*BTDS*/ "Audience deleted");
    }
    B.displayName = B.name + " [from " + i.id + "]";
    function W() {
      return s._(/*BTDS*/ "Processing your audience\u2026");
    }
    W.displayName = W.name + " [from " + i.id + "]";
    function q() {
      return s._(/*BTDS*/ "We'll update you when it's complete.");
    }
    q.displayName = q.name + " [from " + i.id + "]";
    function U() {
      return s._(
        /*BTDS*/ "Your edits are processing. We'll update you when they're complete.",
      );
    }
    ((U.displayName = U.name + " [from " + i.id + "]"),
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
      (l.getGoBackAriaLabel = I),
      (l.getChooseRecipientsToAddHeader = T),
      (l.getChooseRecipientsToRemoveHeader = D),
      (l.getSelectedCountSubtitle = x),
      (l.getSearchPlaceholder = $),
      (l.getSearchByNumberPlaceholder = P),
      (l.getContactListAriaLabel = N),
      (l.getSelectRecipientAriaLabel = M),
      (l.getLoadMorePaginationLabel = w),
      (l.getLoadingPaginationLabel = A),
      (l.getDeleteAudienceModalTitle = F),
      (l.getDeleteAudienceModalBody = O),
      (l.getAudienceDeletedToastMessage = B),
      (l.getAudienceProcessingTitle = W),
      (l.getAudienceProcessingSubtitle = q),
      (l.getAudienceEditsProcessingMessage = U));
  },
  226,
);
