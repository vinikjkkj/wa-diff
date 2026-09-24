__d(
  "WAWebBizBroadcastProRestrictionStrings",
  ["fbt", "WAWebBroadcastConsts", "WDSTextualLink.react", "react"],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e,
      u = e || (e = o("react"));
    function c(e) {
      return e
        ? s._(/*BTDS*/ "This account can't send business broadcasts.")
        : s._(/*BTDS*/ "This account can't send business broadcasts for now.");
    }
    function d() {
      return s._(/*BTDS*/ "Learn more");
    }
    function m(e) {
      return e
        ? s._(
            /*BTDS*/ "This account can't send business broadcasts on WhatsApp",
          )
        : s._(
            /*BTDS*/ "This account can't create or send business broadcasts for now",
          );
    }
    function p(e) {
      return e
        ? s._(
            /*BTDS*/ "We've restricted this business and its WhatsApp Business account due to activity that violates the {=m2} .",
            [
              s._implicitParam(
                "=m2",
                u.jsx(r("WDSTextualLink.react"), {
                  href: o("WAWebBroadcastConsts").BIZ_BROADCAST_TOS_URL,
                  children: s._(
                    /*BTDS*/ "Meta Terms for WhatsApp Business Broadcast with Advanced Tools",
                  ),
                }),
              ),
            ],
          )
        : s._(
            /*BTDS*/ "We've temporarily restricted this business and its WhatsApp Business account due to activity that violates the {=m2} . To avoid this happening again, follow our best practices for {=m5} .",
            [
              s._implicitParam(
                "=m2",
                u.jsx(r("WDSTextualLink.react"), {
                  href: o("WAWebBroadcastConsts").BIZ_BROADCAST_TOS_URL,
                  children: s._(
                    /*BTDS*/ "Meta Terms for WhatsApp Business Broadcast with Advanced Tools",
                  ),
                }),
              ),
              s._implicitParam(
                "=m5",
                u.jsx(r("WDSTextualLink.react"), {
                  href: o("WAWebBroadcastConsts").HIGH_QUALITY_MESSAGES_DOC_URL,
                  children: s._(/*BTDS*/ "sending high quality messages"),
                }),
              ),
            ],
          );
    }
    p.displayName = p.name + " [from " + i.id + "]";
    function _() {
      return s._(/*BTDS*/ "You can receive messages from customers.");
    }
    function f() {
      return s._(/*BTDS*/ "You can't start conversations with customers.");
    }
    function g() {
      return s._(/*BTDS*/ "Verify your business");
    }
    function h() {
      return s._(/*BTDS*/ "Start verification");
    }
    function y() {
      return s._(/*BTDS*/ "OK");
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
