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
        /*BTDS*/ '_j{"*":"Select at least {number} recipients to continue.","_1":"Select at least 1 recipient to continue."}',
        [s._plural(e, "number")],
      );
    }
    L.displayName = L.name + " [from " + i.id + "]";
    function E() {
      return s._(/*BTDS*/ "OK");
    }
    E.displayName = E.name + " [from " + i.id + "]";
    function k(e) {
      return s._(
        /*BTDS*/ '_j{"*":"Keep at least {number} recipients to continue.","_1":"Keep at least 1 recipient to continue."}',
        [s._plural(e, "number")],
      );
    }
    k.displayName = k.name + " [from " + i.id + "]";
    function I(e) {
      return s._(
        /*BTDS*/ '_j{"*":"Upload a file with at least {number} recipients to continue.","_1":"Upload a file with at least 1 recipient to continue."}',
        [s._plural(e, "number")],
      );
    }
    I.displayName = I.name + " [from " + i.id + "]";
    function T() {
      return s._(/*BTDS*/ "Upload new file");
    }
    T.displayName = T.name + " [from " + i.id + "]";
    function D() {
      return s._(/*BTDS*/ "Cancel");
    }
    D.displayName = D.name + " [from " + i.id + "]";
    function x(e, t) {
      return s._(
        /*BTDS*/ '_j{"*":"Upload a CSV or Excel file with at least {number} recipients\' names and phone numbers. For best results, {template_link}.","_1":"Upload a CSV or Excel file with at least 1 recipient\'s name and phone number. For best results, {template_link}."}',
        [s._plural(e, "number"), s._param("template_link", t)],
      );
    }
    x.displayName = x.name + " [from " + i.id + "]";
    function $(e, t) {
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
    $.displayName = $.name + " [from " + i.id + "]";
    function P() {
      return s._(/*BTDS*/ "Go back");
    }
    function N() {
      return s._(/*BTDS*/ "Choose recipients to add");
    }
    N.displayName = N.name + " [from " + i.id + "]";
    function M() {
      return s._(/*BTDS*/ "Choose recipients to remove");
    }
    M.displayName = M.name + " [from " + i.id + "]";
    function w(e) {
      return s._(/*BTDS*/ '_j{"*":"{number} selected","_1":"1 selected"}', [
        s._plural(e, "number"),
      ]);
    }
    w.displayName = w.name + " [from " + i.id + "]";
    function A() {
      return s._(/*BTDS*/ "Select all");
    }
    A.displayName = A.name + " [from " + i.id + "]";
    function F() {
      return s._(/*BTDS*/ "Search name or number");
    }
    F.displayName = F.name + " [from " + i.id + "]";
    function O() {
      return s._(/*BTDS*/ "Search number");
    }
    O.displayName = O.name + " [from " + i.id + "]";
    function B() {
      return s._(/*BTDS*/ "Contact list");
    }
    function W(e) {
      return s._(/*BTDS*/ "Select recipient {recipient phone number}", [
        s._param("recipient phone number", e),
      ]);
    }
    function q(e) {
      return s._(
        /*BTDS*/ "Keep recipient {recipient phone number} in this audience",
        [s._param("recipient phone number", e)],
      );
    }
    function U() {
      return s._(/*BTDS*/ "Load more");
    }
    U.displayName = U.name + " [from " + i.id + "]";
    function V() {
      return s._(/*BTDS*/ "Loading\u2026");
    }
    V.displayName = V.name + " [from " + i.id + "]";
    function H(e) {
      return s._(/*BTDS*/ "Delete {audience name}?", [
        s._param("audience name", e),
      ]);
    }
    H.displayName = H.name + " [from " + i.id + "]";
    function G() {
      return s._(/*BTDS*/ "Processing your audience\u2026");
    }
    G.displayName = G.name + " [from " + i.id + "]";
    function z() {
      return s._(/*BTDS*/ "We'll update you when it's complete.");
    }
    z.displayName = z.name + " [from " + i.id + "]";
    function j() {
      return s._(
        /*BTDS*/ "Your edits are processing. We'll update you when it's complete.",
      );
    }
    ((j.displayName = j.name + " [from " + i.id + "]"),
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
      (l.getAudienceTooSmallSelectBody = L),
      (l.getAudienceTooSmallDismissLabel = E),
      (l.getAudienceTooSmallRemoveBody = k),
      (l.getAudienceTooSmallUploadBody = I),
      (l.getAudienceTooSmallUploadNewFileLabel = T),
      (l.getAudienceTooSmallCancelLabel = D),
      (l.getImportAudienceMinRecipientsDescription = x),
      (l.getImportAudiencePhoneOnlyDescription = $),
      (l.getGoBackAriaLabel = P),
      (l.getChooseRecipientsToAddHeader = N),
      (l.getChooseRecipientsToRemoveHeader = M),
      (l.getSelectedCountSubtitle = w),
      (l.getSelectAllLabel = A),
      (l.getSearchPlaceholder = F),
      (l.getSearchByNumberPlaceholder = O),
      (l.getContactListAriaLabel = B),
      (l.getSelectRecipientAriaLabel = W),
      (l.getKeepRecipientAriaLabel = q),
      (l.getLoadMorePaginationLabel = U),
      (l.getLoadingPaginationLabel = V),
      (l.getDeleteAudienceModalTitle = H),
      (l.getAudienceProcessingTitle = G),
      (l.getAudienceProcessingSubtitle = z),
      (l.getAudienceEditsProcessingMessage = j));
  },
  226,
);
