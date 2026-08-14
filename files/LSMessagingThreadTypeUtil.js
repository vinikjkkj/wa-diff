__d(
  "LSMessagingThreadTypeUtil",
  [
    "FBLogger",
    "I64",
    "LSIntEnum",
    "LSMessageThreadUnsendabilityStatus",
    "LSThreadBitOffset",
    "MessagingThreadSubtype",
    "MetaConfig",
    "mwCMIsAnyCMThread",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e, s;
    function u(t) {
      return (
        (e || (e = o("I64"))).equal(
          t,
          (s || (s = o("LSIntEnum"))).ofNumber(2),
        ) ||
        (e || (e = o("I64"))).equal(
          t,
          (s || (s = o("LSIntEnum"))).ofNumber(8),
        ) ||
        (e || (e = o("I64"))).equal(
          t,
          (s || (s = o("LSIntEnum"))).ofNumber(16),
        ) ||
        (e || (e = o("I64"))).equal(
          t,
          (s || (s = o("LSIntEnum"))).ofNumber(5),
        ) ||
        r("mwCMIsAnyCMThread")(t) ||
        (e || (e = o("I64"))).equal(
          t,
          (s || (s = o("LSIntEnum"))).ofNumber(3),
        ) ||
        (e || (e = o("I64"))).equal(
          t,
          (s || (s = o("LSIntEnum"))).ofNumber(150),
        ) ||
        (e || (e = o("I64"))).equal(
          t,
          (s || (s = o("LSIntEnum"))).ofNumber(151),
        ) ||
        (e || (e = o("I64"))).equal(
          t,
          (s || (s = o("LSIntEnum"))).ofNumber(154),
        ) ||
        (e || (e = o("I64"))).equal(
          t,
          (s || (s = o("LSIntEnum"))).ofNumber(155),
        ) ||
        (e || (e = o("I64"))).equal(
          t,
          (s || (s = o("LSIntEnum"))).ofNumber(152),
        ) ||
        (e || (e = o("I64"))).equal(
          t,
          (s || (s = o("LSIntEnum"))).ofNumber(153),
        ) ||
        (e || (e = o("I64"))).equal(t, (s || (s = o("LSIntEnum"))).ofNumber(26))
      );
    }
    function c(t) {
      return (
        (e || (e = o("I64"))).equal(
          t,
          (s || (s = o("LSIntEnum"))).ofNumber(1),
        ) ||
        (e || (e = o("I64"))).equal(
          t,
          (s || (s = o("LSIntEnum"))).ofNumber(7),
        ) ||
        (e || (e = o("I64"))).equal(
          t,
          (s || (s = o("LSIntEnum"))).ofNumber(10),
        ) ||
        (e || (e = o("I64"))).equal(
          t,
          (s || (s = o("LSIntEnum"))).ofNumber(13),
        ) ||
        (e || (e = o("I64"))).equal(
          t,
          (s || (s = o("LSIntEnum"))).ofNumber(201),
        ) ||
        (e || (e = o("I64"))).equal(
          t,
          (s || (s = o("LSIntEnum"))).ofNumber(228),
        ) ||
        (e || (e = o("I64"))).equal(
          t,
          (s || (s = o("LSIntEnum"))).ofNumber(207),
        )
      );
    }
    function d(t) {
      return (
        c(t) ||
        (e || (e = o("I64"))).equal(t, (s || (s = o("LSIntEnum"))).ofNumber(15))
      );
    }
    function m(t) {
      return (
        (e || (e = o("I64"))).equal(
          t,
          (s || (s = o("LSIntEnum"))).ofNumber(15),
        ) ||
        (e || (e = o("I64"))).equal(t, (s || (s = o("LSIntEnum"))).ofNumber(16))
      );
    }
    function p(t) {
      return (e || (e = o("I64"))).equal(
        t,
        (s || (s = o("LSIntEnum"))).ofNumber(16),
      );
    }
    function _(t) {
      return (e || (e = o("I64"))).equal(
        t,
        (s || (s = o("LSIntEnum"))).ofNumber(15),
      );
    }
    function f(t) {
      return (
        (e || (e = o("I64"))).equal(
          t,
          (s || (s = o("LSIntEnum"))).ofNumber(15),
        ) ||
        (e || (e = o("I64"))).equal(
          t,
          (s || (s = o("LSIntEnum"))).ofNumber(16),
        ) ||
        (e || (e = o("I64"))).equal(
          t,
          (s || (s = o("LSIntEnum"))).ofNumber(1),
        ) ||
        (e || (e = o("I64"))).equal(
          t,
          (s || (s = o("LSIntEnum"))).ofNumber(201),
        ) ||
        (e || (e = o("I64"))).equal(
          t,
          (s || (s = o("LSIntEnum"))).ofNumber(228),
        ) ||
        (e || (e = o("I64"))).equal(
          t,
          (s || (s = o("LSIntEnum"))).ofNumber(207),
        ) ||
        (e || (e = o("I64"))).equal(t, (s || (s = o("LSIntEnum"))).ofNumber(2))
      );
    }
    function g(e) {
      return e === "e2ee_cutover" || e === "inbox";
    }
    function h(t, n) {
      return (
        n === void 0 && (n = !0),
        !n &&
        (e || (e = o("I64"))).equal(
          t.parentThreadKey,
          (s || (s = o("LSIntEnum"))).ofNumber(0),
        )
          ? !1
          : o("LSThreadBitOffset").has(21, t)
      );
    }
    function y(t) {
      return (
        t != null &&
        (e || (e = o("I64"))).equal(
          t,
          (s || (s = o("LSIntEnum"))).ofNumber(
            r("MessagingThreadSubtype").IGD_BC_PARTNERSHIP,
          ),
        )
      );
    }
    function C(e) {
      return h(e, !1);
    }
    function b(t) {
      return (e || (e = o("I64"))).equal(
        t.parentThreadKey,
        (s || (s = o("LSIntEnum"))).ofNumber(-3),
      );
    }
    function v(t) {
      return t == null
        ? !1
        : (e || (e = o("I64"))).equal(
            t,
            (s || (s = o("LSIntEnum"))).ofNumber(
              r("MessagingThreadSubtype").BUSINESS_SUPPORT_THREAD,
            ),
          ) ||
            (e || (e = o("I64"))).equal(
              t,
              (s || (s = o("LSIntEnum"))).ofNumber(
                r("MessagingThreadSubtype").SUPPORT_MESSAGING_THREAD,
              ),
            );
    }
    function S(t) {
      return (e || (e = o("I64"))).equal(
        t,
        (s || (s = o("LSIntEnum"))).ofNumber(2),
      );
    }
    function R(t) {
      var n = (e || (e = o("I64"))).equal(
          t.threadType,
          (s || (s = o("LSIntEnum"))).ofNumber(2),
        ),
        r =
          (e || (e = o("I64"))).equal(
            t.threadType,
            (s || (s = o("LSIntEnum"))).ofNumber(1),
          ) && !j(t);
      return !I(t.threadSubtype) && !v(t.threadSubtype) && (n || r);
    }
    function L(e) {
      return R(e) || m(e.threadType);
    }
    function E(e) {
      return S(e.threadType) || p(e.threadType);
    }
    function k(e) {
      return e.draftMessage != null && e.draftMessage !== "";
    }
    function I(t) {
      return t == null
        ? !1
        : (e || (e = o("I64"))).equal(
            t,
            (s || (s = o("LSIntEnum"))).ofNumber(
              r("MessagingThreadSubtype").PAGE_TO_USER,
            ),
          );
    }
    function T(t) {
      return (e || (e = o("I64"))).equal(
        t,
        (s || (s = o("LSIntEnum"))).ofNumber(150),
      );
    }
    function D(e) {
      return ($(e) || P(e)) && r("MetaConfig")._("32");
    }
    function x(e) {
      return ($(e) || P(e)) && !r("MetaConfig")._("32");
    }
    function $(t) {
      return (e || (e = o("I64"))).equal(
        t,
        (s || (s = o("LSIntEnum"))).ofNumber(152),
      );
    }
    function P(t) {
      return (e || (e = o("I64"))).equal(
        t,
        (s || (s = o("LSIntEnum"))).ofNumber(153),
      );
    }
    function N(e) {
      return !1;
    }
    function M(e) {
      return !1;
    }
    function w(t) {
      return t == null
        ? !1
        : (e || (e = o("I64"))).equal(
            t,
            (s || (s = o("LSIntEnum"))).ofNumber(150),
          ) ||
            (e || (e = o("I64"))).equal(
              t,
              (s || (s = o("LSIntEnum"))).ofNumber(154),
            );
    }
    function A(e) {
      return w(e) || D(e);
    }
    function F(t) {
      return (e || (e = o("I64"))).equal(
        t,
        (s || (s = o("LSIntEnum"))).ofNumber(26),
      );
    }
    function O(t) {
      return (e || (e = o("I64"))).equal(
        t,
        (s || (s = o("LSIntEnum"))).ofNumber(17),
      );
    }
    function B(t) {
      return (e || (e = o("I64"))).equal(
        t,
        (s || (s = o("LSIntEnum"))).ofNumber(19),
      );
    }
    function W(t) {
      return t == null
        ? !1
        : (e || (e = o("I64"))).equal(
            t,
            (s || (s = o("LSIntEnum"))).ofNumber(151),
          ) ||
            (e || (e = o("I64"))).equal(
              t,
              (s || (s = o("LSIntEnum"))).ofNumber(155),
            );
    }
    function q(e) {
      return e == null ? !1 : W(e) || P(e);
    }
    function U(t) {
      return t == null
        ? !1
        : (e || (e = o("I64"))).equal(
            t,
            (s || (s = o("LSIntEnum"))).ofNumber(201),
          );
    }
    function V(t) {
      return t == null
        ? !1
        : (e || (e = o("I64"))).equal(
            t,
            (s || (s = o("LSIntEnum"))).ofNumber(228),
          ) ||
            (e || (e = o("I64"))).equal(
              t,
              (s || (s = o("LSIntEnum"))).ofNumber(207),
            );
    }
    function H(e) {
      return o("LSThreadBitOffset").has(183, e);
    }
    function G(t) {
      return (
        m(t) ||
        (e || (e = o("I64"))).equal(
          t,
          (s || (s = o("LSIntEnum"))).ofNumber(1),
        ) ||
        (e || (e = o("I64"))).equal(
          t,
          (s || (s = o("LSIntEnum"))).ofNumber(2),
        ) ||
        (e || (e = o("I64"))).equal(
          t,
          (s || (s = o("LSIntEnum"))).ofNumber(3),
        ) ||
        (e || (e = o("I64"))).equal(
          t,
          (s || (s = o("LSIntEnum"))).ofNumber(4),
        ) ||
        (e || (e = o("I64"))).equal(
          t,
          (s || (s = o("LSIntEnum"))).ofNumber(5),
        ) ||
        (e || (e = o("I64"))).equal(
          t,
          (s || (s = o("LSIntEnum"))).ofNumber(6),
        ) ||
        (e || (e = o("I64"))).equal(
          t,
          (s || (s = o("LSIntEnum"))).ofNumber(10),
        ) ||
        (e || (e = o("I64"))).equal(t, (s || (s = o("LSIntEnum"))).ofNumber(11))
      );
    }
    function z(t) {
      return (
        A(t) ||
        W(t) ||
        P(t) ||
        r("mwCMIsAnyCMThread")(t) ||
        (e || (e = o("I64"))).equal(
          t,
          (s || (s = o("LSIntEnum"))).ofNumber(17),
        ) ||
        F(t)
      );
    }
    function j(t) {
      return (
        (e || (e = o("I64"))).equal(
          t.threadType,
          (s || (s = o("LSIntEnum"))).ofNumber(1),
        ) &&
        t.cannotUnsendReason != null &&
        (e || (e = o("I64"))).equal(
          t.cannotUnsendReason,
          (s || (s = o("LSIntEnum"))).ofNumber(
            r("LSMessageThreadUnsendabilityStatus").DENY_IF_PAGE_THREAD,
          ),
        )
      );
    }
    function K(t) {
      return (
        t != null &&
        ((e || (e = o("I64"))).equal(
          t,
          (s || (s = o("LSIntEnum"))).ofNumber(
            r("MessagingThreadSubtype").WORKCHAT_GROUP_THREAD,
          ),
        ) ||
          (e || (e = o("I64"))).equal(
            t,
            (s || (s = o("LSIntEnum"))).ofNumber(
              r("MessagingThreadSubtype").WORKROOM_GROUP_THREAD,
            ),
          ) ||
          (e || (e = o("I64"))).equal(
            t,
            (s || (s = o("LSIntEnum"))).ofNumber(
              r("MessagingThreadSubtype").WORKCHAT_ONE_TO_ONE,
            ),
          ))
      );
    }
    function Q(e) {
      if (c(e)) return (s || (s = o("LSIntEnum"))).ofNumber(15);
      if (S(e)) return (s || (s = o("LSIntEnum"))).ofNumber(16);
      throw r("FBLogger")("messenger_web").mustfixThrow(
        "Expected either open 1:1 or open group thread",
      );
    }
    function X(t) {
      return (
        t != null &&
        (e || (e = o("I64"))).equal(
          t,
          (s || (s = o("LSIntEnum"))).ofNumber(
            r("MessagingThreadSubtype").IGD_GROUP,
          ),
        )
      );
    }
    function Y(t) {
      return (e || (e = o("I64"))).equal(
        t,
        (s || (s = o("LSIntEnum"))).ofNumber(5),
      );
    }
    ((l.isGroup = u),
      (l.isOpenOneToOne = c),
      (l.isOneToOne = d),
      (l.isArmadilloSecure = m),
      (l.isArmadilloSecureGroup = p),
      (l.isArmadilloSecureOneToOne = _),
      (l.isRecentsSectionAllowedTypes = f),
      (l.isMessengerOrE2EEInbox = g),
      (l.isMessageRequest = h),
      (l.isPartnership = y),
      (l.isIGDMessageRequest = C),
      (l.isHiddenRequest = b),
      (l.isBusinessSupportThread = v),
      (l.isOpenGroupFnFThread = S),
      (l.isOpenFnFThread = R),
      (l.isOpenOrArmadilloFnFThread = L),
      (l.isFnFGroupThread = E),
      (l.isDraftThread = k),
      (l.isPageToUserThread = I),
      (l.isJoinedSocialChannel = T),
      (l.isDiscoverablePublicBroadcastChannel = D),
      (l.isDiscoverablePublicBroadcastChannelWithNoAccessibility = x),
      (l.isJoinedDiscoverablePublicBroadcastChannel = $),
      (l.isUnjoinedDiscoverablePublicBroadcastChannel = P),
      (l.isSocialChannelV2 = N),
      (l.isJoinedSocialChannelV2 = M),
      (l.isSocialChannel = w),
      (l.isDiscoverableChannel = A),
      (l.isCMSubthread = F),
      (l.isCMFolder = O),
      (l.isCMGroupUnjoined = B),
      (l.isSocialChannelUnjoined = W),
      (l.isChannelPreview = q),
      (l.isAiBot = U),
      (l.isAiAgent = V),
      (l.isAiBotSummoning = H),
      (l.isPrivateThread = G),
      (l.isPublicCMThread = z),
      (l.isThreadForPage = j),
      (l.isWorkThread = K),
      (l.mapOpenToSecureThreadType = Q),
      (l.isSubThreadTypeIGDGroup = X),
      (l.isMarketplaceThread = Y));
  },
  98,
);
