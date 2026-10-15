__d(
  "WAWebHatchIdeasIconAccount",
  [
    "WAWebHatchLinkedStatusManager",
    "WAWebHatchSpaceImages",
    "WAWebHatchVmConnection",
    "WAWebUserPrefsMeUser",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = null,
      s = !1,
      u = null,
      c = !1,
      d = null;
    function m() {
      (c ||
        ((c = !0),
        o("WAWebHatchVmConnection").subscribeToHatchVmAccountChange(g)),
        g(),
        u == null || u());
      var t = r(
          "WAWebHatchLinkedStatusManager",
        ).getLastConfirmedLinkedStatusState(),
        n = _();
      ((t !== "linked" || n != null) && (e = n),
        t != null && (s = t === "linked"),
        (u = r("WAWebHatchLinkedStatusManager").subscribeToLinkedStatus(p)));
    }
    function p() {
      var t = r(
          "WAWebHatchLinkedStatusManager",
        ).getLastConfirmedLinkedStatusState(),
        n = _();
      if (t === "unlinked") {
        ((e != null || s) && o("WAWebHatchSpaceImages").clearHatchSpaceImages(),
          (e = null),
          (s = !1));
        return;
      }
      (t === "linked" && (s = !0),
        n != null &&
          (e != null &&
            e !== n &&
            o("WAWebHatchSpaceImages").clearHatchSpaceImages(),
          (e = n)));
    }
    function _() {
      var e,
        t =
          (e = r("WAWebHatchLinkedStatusManager").getLinkedStatus()) == null
            ? void 0
            : e.channelFbid;
      return r(
        "WAWebHatchLinkedStatusManager",
      ).getLastConfirmedLinkedStatusState() === "linked" &&
        t != null &&
        t !== ""
        ? t
        : null;
    }
    function f() {
      var e, t;
      return (
        ((e =
          (t = o("WAWebUserPrefsMeUser").getMaybeMeLidUser()) == null
            ? void 0
            : t.toString()) != null
          ? e
          : "") +
        "|" +
        o("WAWebHatchVmConnection").getHatchVmAccountGeneration()
      );
    }
    function g() {
      var e = f();
      (d != null &&
        d !== e &&
        o("WAWebHatchSpaceImages").clearHatchSpaceImages(),
        (d = e));
    }
    ((l.watchHatchIdeasIconAccount = m),
      (l.readHatchIdeasOwnerToken = f),
      (l.syncHatchIdeasIconOwner = g));
  },
  98,
);
