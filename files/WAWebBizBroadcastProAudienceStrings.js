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
      return s._(/*BTDS*/ "Go back");
    }
    function b() {
      return s._(/*BTDS*/ "Choose recipients to add");
    }
    b.displayName = b.name + " [from " + i.id + "]";
    function v() {
      return s._(/*BTDS*/ "Choose recipients to remove");
    }
    v.displayName = v.name + " [from " + i.id + "]";
    function S(e) {
      return s._(/*BTDS*/ '_j{"*":"{number} selected","_1":"1 selected"}', [
        s._plural(e, "number"),
      ]);
    }
    S.displayName = S.name + " [from " + i.id + "]";
    function R() {
      return s._(/*BTDS*/ "Search name or number");
    }
    R.displayName = R.name + " [from " + i.id + "]";
    function L() {
      return s._(/*BTDS*/ "Search number");
    }
    L.displayName = L.name + " [from " + i.id + "]";
    function E() {
      return s._(/*BTDS*/ "Contact list");
    }
    function k(e) {
      return s._(/*BTDS*/ "Select recipient {recipient phone number}", [
        s._param("recipient phone number", e),
      ]);
    }
    function I() {
      return s._(/*BTDS*/ "Load more");
    }
    I.displayName = I.name + " [from " + i.id + "]";
    function T() {
      return s._(/*BTDS*/ "Loading\u2026");
    }
    T.displayName = T.name + " [from " + i.id + "]";
    function D(e) {
      return s._(/*BTDS*/ "Delete {audience name}?", [
        s._param("audience name", e),
      ]);
    }
    D.displayName = D.name + " [from " + i.id + "]";
    function x() {
      return s._(
        /*BTDS*/ "This audience and its thread will be permanently deleted and cannot be restored.",
      );
    }
    x.displayName = x.name + " [from " + i.id + "]";
    function $() {
      return s._(/*BTDS*/ "Audience deleted");
    }
    (($.displayName = $.name + " [from " + i.id + "]"),
      (l.getCreateAudienceButtonLabel = c),
      (l.getMarketingConsentCheckboxLabel = d),
      (l.getAddSelectedAudiencesButtonLabel = m),
      (l.getChooseAnAudienceDialogTitle = p),
      (l.getAddRecipientsLabel = _),
      (l.getRemoveRecipientsLabel = f),
      (l.getRemoveRecipientsButtonLabel = g),
      (l.getEditAudienceFailureToastMessage = h),
      (l.getCreateAudienceFailureToastMessage = y),
      (l.getGoBackAriaLabel = C),
      (l.getChooseRecipientsToAddHeader = b),
      (l.getChooseRecipientsToRemoveHeader = v),
      (l.getSelectedCountSubtitle = S),
      (l.getSearchPlaceholder = R),
      (l.getSearchByNumberPlaceholder = L),
      (l.getContactListAriaLabel = E),
      (l.getSelectRecipientAriaLabel = k),
      (l.getLoadMorePaginationLabel = I),
      (l.getLoadingPaginationLabel = T),
      (l.getDeleteAudienceModalTitle = D),
      (l.getDeleteAudienceModalBody = x),
      (l.getAudienceDeletedToastMessage = $));
  },
  226,
);
