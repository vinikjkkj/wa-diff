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
      return s._(/*BTDS*/ "Add more recipients");
    }
    b.displayName = b.name + " [from " + i.id + "]";
    function v(e) {
      return s._(
        /*BTDS*/ '_j{"*":"Select at least {number} recipients to continue.","_1":"Select at least 1 recipient to continue."}',
        [s._plural(e, "number")],
      );
    }
    v.displayName = v.name + " [from " + i.id + "]";
    function S() {
      return s._(/*BTDS*/ "broadcast settings");
    }
    S.displayName = S.name + " [from " + i.id + "]";
    function R(e, t) {
      return s._(
        /*BTDS*/ '_j{"*":"Select at least {number} recipients to continue. If you need to create smaller audiences, turn off advanced tools in {broadcast_settings}.","_1":"Select at least 1 recipient to continue. If you need to create smaller audiences, turn off advanced tools in {broadcast_settings}."}',
        [s._plural(e, "number"), s._param("broadcast_settings", t)],
      );
    }
    R.displayName = R.name + " [from " + i.id + "]";
    function L() {
      return s._(/*BTDS*/ "OK");
    }
    L.displayName = L.name + " [from " + i.id + "]";
    function E(e, t) {
      return s._(
        /*BTDS*/ '_j{"*":"Upload a file with at least {number} recipients to continue. If you need to create smaller audiences, turn off advanced tools in {broadcast_settings}.","_1":"Upload a file with at least 1 recipient to continue. If you need to create smaller audiences, turn off advanced tools in {broadcast_settings}."}',
        [s._plural(e, "number"), s._param("broadcast_settings", t)],
      );
    }
    E.displayName = E.name + " [from " + i.id + "]";
    function k() {
      return s._(/*BTDS*/ "Upload new file");
    }
    k.displayName = k.name + " [from " + i.id + "]";
    function I() {
      return s._(/*BTDS*/ "Cancel");
    }
    I.displayName = I.name + " [from " + i.id + "]";
    function T(e, t) {
      return s._(
        /*BTDS*/ '_j{"*":"Upload a CSV or Excel file with at least {number} recipients\' names and phone numbers. For best results, {template_link}.","_1":"Upload a CSV or Excel file with at least 1 recipient\'s name and phone number. For best results, {template_link}."}',
        [s._plural(e, "number"), s._param("template_link", t)],
      );
    }
    T.displayName = T.name + " [from " + i.id + "]";
    function D(e, t) {
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
    D.displayName = D.name + " [from " + i.id + "]";
    function x() {
      return s._(/*BTDS*/ "Go back");
    }
    function $() {
      return s._(/*BTDS*/ "Choose recipients to add");
    }
    $.displayName = $.name + " [from " + i.id + "]";
    function P() {
      return s._(/*BTDS*/ "Choose recipients to remove");
    }
    P.displayName = P.name + " [from " + i.id + "]";
    function N(e) {
      return s._(/*BTDS*/ '_j{"*":"{number} selected","_1":"1 selected"}', [
        s._plural(e, "number"),
      ]);
    }
    N.displayName = N.name + " [from " + i.id + "]";
    function M() {
      return s._(/*BTDS*/ "Search name or number");
    }
    M.displayName = M.name + " [from " + i.id + "]";
    function w() {
      return s._(/*BTDS*/ "Search number");
    }
    w.displayName = w.name + " [from " + i.id + "]";
    function A() {
      return s._(/*BTDS*/ "Contact list");
    }
    function F(e) {
      return s._(/*BTDS*/ "Select recipient {recipient phone number}", [
        s._param("recipient phone number", e),
      ]);
    }
    function O() {
      return s._(/*BTDS*/ "Load more");
    }
    O.displayName = O.name + " [from " + i.id + "]";
    function B() {
      return s._(/*BTDS*/ "Loading\u2026");
    }
    B.displayName = B.name + " [from " + i.id + "]";
    function W(e) {
      return s._(/*BTDS*/ "Delete {audience name}?", [
        s._param("audience name", e),
      ]);
    }
    W.displayName = W.name + " [from " + i.id + "]";
    function q() {
      return s._(
        /*BTDS*/ "This audience and its thread will be permanently deleted and cannot be restored.",
      );
    }
    q.displayName = q.name + " [from " + i.id + "]";
    function U() {
      return s._(/*BTDS*/ "Processing your audience\u2026");
    }
    U.displayName = U.name + " [from " + i.id + "]";
    function V() {
      return s._(/*BTDS*/ "We'll update you when it's complete.");
    }
    V.displayName = V.name + " [from " + i.id + "]";
    function H() {
      return s._(
        /*BTDS*/ "Your edits are processing. We'll update you when they're complete.",
      );
    }
    ((H.displayName = H.name + " [from " + i.id + "]"),
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
      (l.getAudienceBelowFloorBannerTitle = b),
      (l.getAudienceBelowFloorBannerBody = v),
      (l.getBroadcastSettingsReference = S),
      (l.getAudienceTooSmallSelectBody = R),
      (l.getAudienceTooSmallDismissLabel = L),
      (l.getAudienceTooSmallUploadBody = E),
      (l.getAudienceTooSmallUploadNewFileLabel = k),
      (l.getAudienceTooSmallCancelLabel = I),
      (l.getImportAudienceMinRecipientsDescription = T),
      (l.getImportAudiencePhoneOnlyDescription = D),
      (l.getGoBackAriaLabel = x),
      (l.getChooseRecipientsToAddHeader = $),
      (l.getChooseRecipientsToRemoveHeader = P),
      (l.getSelectedCountSubtitle = N),
      (l.getSearchPlaceholder = M),
      (l.getSearchByNumberPlaceholder = w),
      (l.getContactListAriaLabel = A),
      (l.getSelectRecipientAriaLabel = F),
      (l.getLoadMorePaginationLabel = O),
      (l.getLoadingPaginationLabel = B),
      (l.getDeleteAudienceModalTitle = W),
      (l.getDeleteAudienceModalBody = q),
      (l.getAudienceProcessingTitle = U),
      (l.getAudienceProcessingSubtitle = V),
      (l.getAudienceEditsProcessingMessage = H));
  },
  226,
);
