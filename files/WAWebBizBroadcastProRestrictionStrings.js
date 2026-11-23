__d(
  "WAWebBizBroadcastProRestrictionStrings",
  ["fbt", "WAWebBroadcastConsts", "WDSTextualLink.react", "react"],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e,
      u = e || (e = o("react"));
    function c(e) {
      return e ? s._(/*BTDS*/ "") : s._(/*BTDS*/ "");
    }
    function d() {
      return s._(/*BTDS*/ "");
    }
    function m(e) {
      return e ? s._(/*BTDS*/ "") : s._(/*BTDS*/ "");
    }
    function p(e) {
      return e
        ? s._(/*BTDS*/ "", [
            s._implicitParam(
              "=m2",
              u.jsx(r("WDSTextualLink.react"), {
                href: o("WAWebBroadcastConsts").BIZ_BROADCAST_TOS_URL,
                children: s._(/*BTDS*/ ""),
              }),
            ),
          ])
        : s._(/*BTDS*/ "", [
            s._implicitParam(
              "=m2",
              u.jsx(r("WDSTextualLink.react"), {
                href: o("WAWebBroadcastConsts").BIZ_BROADCAST_TOS_URL,
                children: s._(/*BTDS*/ ""),
              }),
            ),
            s._implicitParam(
              "=m5",
              u.jsx(r("WDSTextualLink.react"), {
                href: o("WAWebBroadcastConsts").HIGH_QUALITY_MESSAGES_DOC_URL,
                children: s._(/*BTDS*/ ""),
              }),
            ),
          ]);
    }
    p.displayName = p.name + " [from " + i.id + "]";
    function _() {
      return s._(/*BTDS*/ "");
    }
    function f() {
      return s._(/*BTDS*/ "");
    }
    function g() {
      return s._(/*BTDS*/ "");
    }
    function h() {
      return s._(/*BTDS*/ "");
    }
    function y() {
      return s._(/*BTDS*/ "");
    }
    ((l.getRestrictionBannerBody = c),
      (l.getRestrictionBannerAction = d),
      (l.getRestrictionTitle = m),
      (l.getRestrictionBody = p),
      (l.getCanReceiveMessagesBullet = _),
      (l.getCannotStartConversationsBullet = f),
      (l.getVerifyBusinessBullet = g),
      (l.getStartVerificationLabel = h),
      (l.getDismissLabel = y));
  },
  226,
);
