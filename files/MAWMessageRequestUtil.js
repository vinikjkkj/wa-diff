__d(
  "MAWMessageRequestUtil",
  [
    "I64",
    "LSContactBitOffset",
    "LSContactViewerRelationship",
    "LSIntEnum",
    "LSMessagingThreadTypeUtil",
    "MWFBLogger",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e, s;
    function u(t, n, a) {
      if (t === "pending" || t === "other")
        return (
          o("MWFBLogger")
            .MWLogger()
            .debug(
              "isMessagerRequestV2 returns true: folderName is " +
                t +
                ", contactViewerRelationship is " +
                (e || (e = o("I64"))).to_string(a.contactViewerRelationship),
            ),
          !0
        );
      var i = o("LSContactBitOffset").hasWithDefault(64, a, !0);
      return t === "inbox" &&
        (e || (e = o("I64"))).equal(
          a.contactViewerRelationship,
          (s || (s = o("LSIntEnum"))).ofNumber(
            r("LSContactViewerRelationship").NOT_CONTACT,
          ),
        ) &&
        !i
        ? (n &&
            o("MWFBLogger")
              .MWLogger()
              .debug(
                "isMessagerRequestV2 returns true: folderName is inbox, contactViewerRelationship is " +
                  (e || (e = o("I64"))).to_string(a.contactViewerRelationship) +
                  ", isViewerUnconnected is false, hasActivity is true",
              ),
          n)
        : !1;
    }
    function c(e) {
      return e === "pending" || e === "other";
    }
    function d(e) {
      return o("LSMessagingThreadTypeUtil").isOneToOne(e.threadType)
        ? c(e.folderName)
        : !1;
    }
    function m(t, n) {
      return n != null
        ? u(
            t.folderName,
            (e || (e = o("I64"))).gt(t.lastActivityTimestampMs, e.zero),
            n[1],
          )
        : !1;
    }
    function p(e, t) {
      return o("LSMessagingThreadTypeUtil").isOneToOne(e.threadType)
        ? m(e, t)
        : !1;
    }
    function _(e) {
      return o("LSMessagingThreadTypeUtil").isGroup(e.threadType)
        ? c(e.folderName)
        : !1;
    }
    var f = [8, 18, 19, 34, 24, 25, 122],
      g = [21, 48];
    ((l.isMessageRequestV2 = u),
      (l.isOneOnOneMessageRequest = d),
      (l.isOneOnOneMessageRequestV2 = p),
      (l.isGroupMessageRequest = _),
      (l.disabledThreadCapabilitiesForIncomingRequest = f),
      (l.enabledThreadCapabilitiesForIncomingRequest = g));
  },
  98,
);
