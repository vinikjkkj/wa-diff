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
        /*BTDS*/ "I confirm I have marketing consent from all recipients in this list and it complies with {=m1} .",
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
      return s._(/*BTDS*/ "Open thread");
    }
    _.displayName = _.name + " [from " + i.id + "]";
    function f() {
      return s._(/*BTDS*/ "Edit name");
    }
    f.displayName = f.name + " [from " + i.id + "]";
    function g() {
      return s._(/*BTDS*/ "Add recipients");
    }
    g.displayName = g.name + " [from " + i.id + "]";
    function h() {
      return s._(/*BTDS*/ "Remove recipients");
    }
    h.displayName = h.name + " [from " + i.id + "]";
    function y() {
      return s._(/*BTDS*/ "Remove recipients");
    }
    y.displayName = y.name + " [from " + i.id + "]";
    function C() {
      return s._(/*BTDS*/ "Your changes couldn't be saved. Please try again.");
    }
    C.displayName = C.name + " [from " + i.id + "]";
    function b() {
      return s._(/*BTDS*/ "Your audience couldn't be saved. Please try again.");
    }
    b.displayName = b.name + " [from " + i.id + "]";
    function v() {
      return s._(/*BTDS*/ "Add more recipients");
    }
    v.displayName = v.name + " [from " + i.id + "]";
    function S() {
      return s._(/*BTDS*/ "Add more recipients");
    }
    S.displayName = S.name + " [from " + i.id + "]";
    function R(e) {
      return s._(
        /*BTDS*/ '_j{"*":"Select at least {number} recipients to continue.","_1":"Select at least 1 recipient to continue."}',
        [s._plural(e, "number")],
      );
    }
    R.displayName = R.name + " [from " + i.id + "]";
    function L(e) {
      return s._(
        /*BTDS*/ '_j{"*":"Your audience needs at least {number} recipients to send.","_1":"Your audience needs at least 1 recipient to send."}',
        [s._plural(e, "number")],
      );
    }
    L.displayName = L.name + " [from " + i.id + "]";
    function E(e) {
      return s._(
        /*BTDS*/ '_j{"*":"Select at least {number} recipients to continue.","_1":"Select at least 1 recipient to continue."}',
        [s._plural(e, "number")],
      );
    }
    E.displayName = E.name + " [from " + i.id + "]";
    function k() {
      return s._(/*BTDS*/ "OK");
    }
    k.displayName = k.name + " [from " + i.id + "]";
    function I(e) {
      return s._(
        /*BTDS*/ '_j{"*":"Keep at least {number} recipients to continue.","_1":"Keep at least 1 recipient to continue."}',
        [s._plural(e, "number")],
      );
    }
    I.displayName = I.name + " [from " + i.id + "]";
    function T(e) {
      return s._(
        /*BTDS*/ '_j{"*":"Upload a file with at least {number} recipients to continue.","_1":"Upload a file with at least 1 recipient to continue."}',
        [s._plural(e, "number")],
      );
    }
    T.displayName = T.name + " [from " + i.id + "]";
    function D() {
      return s._(/*BTDS*/ "Upload new file");
    }
    D.displayName = D.name + " [from " + i.id + "]";
    function x() {
      return s._(/*BTDS*/ "Cancel");
    }
    x.displayName = x.name + " [from " + i.id + "]";
    function $(e, t) {
      return s._(
        /*BTDS*/ '_j{"*":"Upload a CSV or Excel file with at least {number} recipients\' names and phone numbers. For best results, {template_link}.","_1":"Upload a CSV or Excel file with at least 1 recipient\'s name and phone number. For best results, {template_link}."}',
        [s._plural(e, "number"), s._param("template_link", t)],
      );
    }
    $.displayName = $.name + " [from " + i.id + "]";
    function P(e, t) {
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
    P.displayName = P.name + " [from " + i.id + "]";
    function N() {
      return s._(/*BTDS*/ "Go back");
    }
    function M() {
      return s._(/*BTDS*/ "Choose recipients to add");
    }
    M.displayName = M.name + " [from " + i.id + "]";
    function w() {
      return s._(/*BTDS*/ "Choose recipients to remove");
    }
    w.displayName = w.name + " [from " + i.id + "]";
    function A(e) {
      return s._(/*BTDS*/ '_j{"*":"{number} selected","_1":"1 selected"}', [
        s._plural(e, "number"),
      ]);
    }
    A.displayName = A.name + " [from " + i.id + "]";
    function F() {
      return s._(/*BTDS*/ "Select all");
    }
    F.displayName = F.name + " [from " + i.id + "]";
    function O() {
      return s._(/*BTDS*/ "Search name or number");
    }
    O.displayName = O.name + " [from " + i.id + "]";
    function B() {
      return s._(/*BTDS*/ "Search number");
    }
    B.displayName = B.name + " [from " + i.id + "]";
    function W() {
      return s._(/*BTDS*/ "Contact list");
    }
    function q(e) {
      return s._(/*BTDS*/ "Select recipient {recipient phone number}", [
        s._param("recipient phone number", e),
      ]);
    }
    function U(e) {
      return s._(
        /*BTDS*/ "Keep recipient {recipient phone number} in this audience",
        [s._param("recipient phone number", e)],
      );
    }
    function V() {
      return s._(/*BTDS*/ "Load more");
    }
    V.displayName = V.name + " [from " + i.id + "]";
    function H() {
      return s._(/*BTDS*/ "Loading\u2026");
    }
    H.displayName = H.name + " [from " + i.id + "]";
    function G(e) {
      return s._(/*BTDS*/ "Delete {audience name}?", [
        s._param("audience name", e),
      ]);
    }
    G.displayName = G.name + " [from " + i.id + "]";
    function z() {
      return s._(/*BTDS*/ "Processing your audience\u2026");
    }
    z.displayName = z.name + " [from " + i.id + "]";
    function j() {
      return s._(/*BTDS*/ "We'll update you when it's complete.");
    }
    j.displayName = j.name + " [from " + i.id + "]";
    function K() {
      return s._(
        /*BTDS*/ "Your edits are processing. We'll update you when it's complete.",
      );
    }
    ((K.displayName = K.name + " [from " + i.id + "]"),
      (l.getCreateAudienceButtonLabel = c),
      (l.getMarketingConsentCheckboxLabel = d),
      (l.getAddSelectedAudiencesButtonLabel = m),
      (l.getChooseAnAudienceDialogTitle = p),
      (l.getOpenThreadLabel = _),
      (l.getEditAudienceNameActionLabel = f),
      (l.getAddRecipientsLabel = g),
      (l.getRemoveRecipientsLabel = h),
      (l.getRemoveRecipientsButtonLabel = y),
      (l.getEditAudienceFailureToastMessage = C),
      (l.getCreateAudienceFailureToastMessage = b),
      (l.getAudienceTooSmallTitle = v),
      (l.getAudienceBelowFloorBannerTitle = S),
      (l.getAudienceBelowFloorBannerBody = R),
      (l.getAudienceBelowFloorStatusBody = L),
      (l.getAudienceTooSmallSelectBody = E),
      (l.getAudienceTooSmallDismissLabel = k),
      (l.getAudienceTooSmallRemoveBody = I),
      (l.getAudienceTooSmallUploadBody = T),
      (l.getAudienceTooSmallUploadNewFileLabel = D),
      (l.getAudienceTooSmallCancelLabel = x),
      (l.getImportAudienceMinRecipientsDescription = $),
      (l.getImportAudiencePhoneOnlyDescription = P),
      (l.getGoBackAriaLabel = N),
      (l.getChooseRecipientsToAddHeader = M),
      (l.getChooseRecipientsToRemoveHeader = w),
      (l.getSelectedCountSubtitle = A),
      (l.getSelectAllLabel = F),
      (l.getSearchPlaceholder = O),
      (l.getSearchByNumberPlaceholder = B),
      (l.getContactListAriaLabel = W),
      (l.getSelectRecipientAriaLabel = q),
      (l.getKeepRecipientAriaLabel = U),
      (l.getLoadMorePaginationLabel = V),
      (l.getLoadingPaginationLabel = H),
      (l.getDeleteAudienceModalTitle = G),
      (l.getAudienceProcessingTitle = z),
      (l.getAudienceProcessingSubtitle = j),
      (l.getAudienceEditsProcessingMessage = K));
  },
  226,
);
