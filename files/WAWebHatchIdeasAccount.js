__d(
  "WAWebHatchIdeasAccount",
  [
    "WAWebHatchIdeasIconAccount",
    "WAWebHatchLinkedStatusManager",
    "WAWebHatchVmConnection",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = 45e3;
    function s(e) {
      var t = e.onAccountReset,
        n = e.onLinkedStatus,
        a = r("WAWebHatchLinkedStatusManager").subscribeToLinkedStatus(n),
        i = o("WAWebHatchVmConnection").subscribeToHatchVmAccountChange(t);
      return function () {
        (a(), i());
      };
    }
    function u() {
      var e = o("WAWebHatchIdeasIconAccount").readHatchIdeasOwnerToken();
      return function () {
        return o("WAWebHatchIdeasIconAccount").readHatchIdeasOwnerToken() === e;
      };
    }
    function c() {
      var e;
      if (
        r(
          "WAWebHatchLinkedStatusManager",
        ).getLastConfirmedLinkedStatusState() === "unlinked"
      )
        return { kind: "unlinked" };
      var t =
        (e = r("WAWebHatchLinkedStatusManager").getLinkedStatus()) == null
          ? void 0
          : e.channelFbid;
      return { kind: "readable", channel: t === "" ? null : t };
    }
    function d(e, t, n) {
      return e.kind !== t.kind
        ? !0
        : t.kind === "readable" &&
            t.channel != null &&
            n != null &&
            t.channel !== n;
    }
    function m() {
      var e,
        t = r(
          "WAWebHatchLinkedStatusManager",
        ).getLastConfirmedLinkedStatusState();
      if (t === "unlinked") return { kind: "unlinked" };
      var n =
        (e = r("WAWebHatchLinkedStatusManager").getLinkedStatus()) == null
          ? void 0
          : e.channelFbid;
      return t === "linked" && n != null && n !== ""
        ? { kind: "channel", channel: n }
        : { kind: "unnamed" };
    }
    function p(e, t) {
      return t.kind === "unlinked" || e.kind === "unlinked"
        ? t.kind !== e.kind && t.kind !== "unnamed"
        : e.kind === "channel" &&
            t.kind === "channel" &&
            t.channel !== e.channel;
    }
    ((l.HATCH_IDEAS_READ_DEADLINE_MS = e),
      (l.subscribeToHatchIdeasAccount = s),
      (l.captureHatchIdeasOwner = u),
      (l.readHatchIdeasFeedAccount = c),
      (l.isHatchIdeasFeedAccountChange = d),
      (l.readHatchIdeasDetailAccount = m),
      (l.isHatchIdeasDetailAccountChange = p));
  },
  98,
);
