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
      return s._(/*BTDS*/ "Import contacts");
    }
    function m() {
      return s._(/*BTDS*/ "Invite contacts");
    }
    function p() {
      return s._(/*BTDS*/ "Invite contacts");
    }
    function _() {
      return s._(
        /*BTDS*/ "I confirm I have marketing consent from all recipients in this list and it complies with {=m1}.",
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
    _.displayName = _.name + " [from " + i.id + "]";
    function f() {
      return s._(/*BTDS*/ "Add");
    }
    f.displayName = f.name + " [from " + i.id + "]";
    function g() {
      return s._(/*BTDS*/ "Choose an audience");
    }
    g.displayName = g.name + " [from " + i.id + "]";
    function h() {
      return s._(/*BTDS*/ "Open thread");
    }
    h.displayName = h.name + " [from " + i.id + "]";
    function y() {
      return s._(/*BTDS*/ "Edit name");
    }
    y.displayName = y.name + " [from " + i.id + "]";
    function C() {
      return s._(/*BTDS*/ "Add recipients");
    }
    C.displayName = C.name + " [from " + i.id + "]";
    function b() {
      return s._(/*BTDS*/ "Remove recipients");
    }
    b.displayName = b.name + " [from " + i.id + "]";
    function v() {
      return s._(/*BTDS*/ "Remove recipients");
    }
    v.displayName = v.name + " [from " + i.id + "]";
    function S() {
      return s._(/*BTDS*/ "Your changes couldn't be saved. Please try again.");
    }
    S.displayName = S.name + " [from " + i.id + "]";
    function R() {
      return s._(/*BTDS*/ "Your audience couldn't be saved. Please try again.");
    }
    R.displayName = R.name + " [from " + i.id + "]";
    function L() {
      return s._(/*BTDS*/ "Couldn't add audience. Please try again.");
    }
    L.displayName = L.name + " [from " + i.id + "]";
    function E() {
      return s._(/*BTDS*/ "Add more recipients");
    }
    E.displayName = E.name + " [from " + i.id + "]";
    function k() {
      return s._(/*BTDS*/ "Add more recipients");
    }
    k.displayName = k.name + " [from " + i.id + "]";
    function I(e) {
      return s._(
        /*BTDS*/ '_j{"*":"Select at least {number} recipients to continue.","_1":"Select at least 1 recipient to continue."}',
        [s._plural(e, "number")],
      );
    }
    I.displayName = I.name + " [from " + i.id + "]";
    function T(e) {
      return s._(
        /*BTDS*/ '_j{"*":"Your audience needs at least {number} recipients to send.","_1":"Your audience needs at least 1 recipient to send."}',
        [s._plural(e, "number")],
      );
    }
    T.displayName = T.name + " [from " + i.id + "]";
    function D(e) {
      return s._(
        /*BTDS*/ '_j{"*":"Select at least {number} recipients to continue.","_1":"Select at least 1 recipient to continue."}',
        [s._plural(e, "number")],
      );
    }
    D.displayName = D.name + " [from " + i.id + "]";
    function x() {
      return s._(/*BTDS*/ "OK");
    }
    x.displayName = x.name + " [from " + i.id + "]";
    function $(e) {
      return s._(
        /*BTDS*/ '_j{"*":"Keep at least {number} recipients to continue.","_1":"Keep at least 1 recipient to continue."}',
        [s._plural(e, "number")],
      );
    }
    $.displayName = $.name + " [from " + i.id + "]";
    function P(e) {
      return s._(
        /*BTDS*/ '_j{"*":"Upload a file with at least {number} recipients to continue.","_1":"Upload a file with at least 1 recipient to continue."}',
        [s._plural(e, "number")],
      );
    }
    P.displayName = P.name + " [from " + i.id + "]";
    function N() {
      return s._(/*BTDS*/ "Upload new file");
    }
    N.displayName = N.name + " [from " + i.id + "]";
    function M() {
      return s._(/*BTDS*/ "Cancel");
    }
    M.displayName = M.name + " [from " + i.id + "]";
    function w(e, t) {
      return s._(
        /*BTDS*/ '_j{"*":"Upload a CSV or Excel file with at least {number} recipients\' names and phone numbers. For best results, {template_link}.","_1":"Upload a CSV or Excel file with at least 1 recipient\'s name and phone number. For best results, {template_link}."}',
        [s._plural(e, "number"), s._param("template_link", t)],
      );
    }
    w.displayName = w.name + " [from " + i.id + "]";
    function A(e, t) {
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
    A.displayName = A.name + " [from " + i.id + "]";
    function F() {
      return s._(/*BTDS*/ "Go back");
    }
    function O() {
      return s._(/*BTDS*/ "Choose recipients to add");
    }
    O.displayName = O.name + " [from " + i.id + "]";
    function B() {
      return s._(/*BTDS*/ "Choose recipients to remove");
    }
    B.displayName = B.name + " [from " + i.id + "]";
    function W(e) {
      return s._(/*BTDS*/ '_j{"*":"{number} selected","_1":"1 selected"}', [
        s._plural(e, "number"),
      ]);
    }
    W.displayName = W.name + " [from " + i.id + "]";
    function q() {
      return s._(/*BTDS*/ "Select all");
    }
    q.displayName = q.name + " [from " + i.id + "]";
    function U() {
      return s._(/*BTDS*/ "Search name or number");
    }
    U.displayName = U.name + " [from " + i.id + "]";
    function V() {
      return s._(/*BTDS*/ "Search number");
    }
    V.displayName = V.name + " [from " + i.id + "]";
    function H() {
      return s._(/*BTDS*/ "Contact list");
    }
    function G(e) {
      return s._(/*BTDS*/ "Select recipient {recipient phone number}", [
        s._param("recipient phone number", e),
      ]);
    }
    function z(e) {
      return s._(
        /*BTDS*/ "Keep recipient {recipient phone number} in this audience",
        [s._param("recipient phone number", e)],
      );
    }
    function j() {
      return s._(/*BTDS*/ "Load more");
    }
    j.displayName = j.name + " [from " + i.id + "]";
    function K() {
      return s._(/*BTDS*/ "Loading\u2026");
    }
    K.displayName = K.name + " [from " + i.id + "]";
    function Q(e) {
      return s._(/*BTDS*/ "Delete {audience name}?", [
        s._param("audience name", e),
      ]);
    }
    Q.displayName = Q.name + " [from " + i.id + "]";
    function X() {
      return s._(/*BTDS*/ "Processing your audience\u2026");
    }
    X.displayName = X.name + " [from " + i.id + "]";
    function Y() {
      return s._(/*BTDS*/ "We'll update you when it's complete.");
    }
    Y.displayName = Y.name + " [from " + i.id + "]";
    function J() {
      return s._(
        /*BTDS*/ "Your edits are processing. We'll update you when it's complete.",
      );
    }
    ((J.displayName = J.name + " [from " + i.id + "]"),
      (l.getCreateAudienceButtonLabel = c),
      (l.getEmptyAudienceImportActionLabel = d),
      (l.getEmptyAudienceInviteActionLabel = m),
      (l.getEmptyAudienceSecondaryInviteActionLabel = p),
      (l.getMarketingConsentCheckboxLabel = _),
      (l.getAddSelectedAudiencesButtonLabel = f),
      (l.getChooseAnAudienceDialogTitle = g),
      (l.getOpenThreadLabel = h),
      (l.getEditAudienceNameActionLabel = y),
      (l.getAddRecipientsLabel = C),
      (l.getRemoveRecipientsLabel = b),
      (l.getRemoveRecipientsButtonLabel = v),
      (l.getEditAudienceFailureToastMessage = S),
      (l.getCreateAudienceFailureToastMessage = R),
      (l.getSelectAudienceFailureToastMessage = L),
      (l.getAudienceTooSmallTitle = E),
      (l.getAudienceBelowFloorBannerTitle = k),
      (l.getAudienceBelowFloorBannerBody = I),
      (l.getAudienceBelowFloorStatusBody = T),
      (l.getAudienceTooSmallSelectBody = D),
      (l.getAudienceTooSmallDismissLabel = x),
      (l.getAudienceTooSmallRemoveBody = $),
      (l.getAudienceTooSmallUploadBody = P),
      (l.getAudienceTooSmallUploadNewFileLabel = N),
      (l.getAudienceTooSmallCancelLabel = M),
      (l.getImportAudienceMinRecipientsDescription = w),
      (l.getImportAudiencePhoneOnlyDescription = A),
      (l.getGoBackAriaLabel = F),
      (l.getChooseRecipientsToAddHeader = O),
      (l.getChooseRecipientsToRemoveHeader = B),
      (l.getSelectedCountSubtitle = W),
      (l.getSelectAllLabel = q),
      (l.getSearchPlaceholder = U),
      (l.getSearchByNumberPlaceholder = V),
      (l.getContactListAriaLabel = H),
      (l.getSelectRecipientAriaLabel = G),
      (l.getKeepRecipientAriaLabel = z),
      (l.getLoadMorePaginationLabel = j),
      (l.getLoadingPaginationLabel = K),
      (l.getDeleteAudienceModalTitle = Q),
      (l.getAudienceProcessingTitle = X),
      (l.getAudienceProcessingSubtitle = Y),
      (l.getAudienceEditsProcessingMessage = J));
  },
  226,
);
