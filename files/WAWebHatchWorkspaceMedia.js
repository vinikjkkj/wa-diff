__d(
  "WAWebHatchWorkspaceMedia",
  [
    "WALogger",
    "WAWebHatchLinkedStatusManager",
    "WAWebHatchSpaceImages",
    "WAWebHatchVmConnection",
    "WAWebHatchVmTransport",
    "WAWebHatchWorkspaceMediaPage",
    "WAWebNullFunc",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = [],
      u = !1,
      c = 0,
      d = "none",
      m = !1,
      p = null,
      _ = 0,
      f = !1,
      g = !1,
      h = null,
      y = { hasMore: u, isLoadMoreFailed: m, items: s, status: "loading" },
      C = new Set();
    function b() {
      return y;
    }
    function v(e) {
      F();
      var t = { listener: e };
      return (
        C.add(t),
        function () {
          C.delete(t);
        }
      );
    }
    function S() {
      (F(), p !== "refresh" && $("refresh", 0));
    }
    function R() {
      p == null && u && $("more", c);
    }
    function L(e) {
      var t = s.filter(function (t) {
        return t.path !== e;
      });
      t.length !== s.length && ((s = t), (c -= 1), _++, (p = null), A(), P());
    }
    function E() {
      var e, t;
      return r("WAWebHatchLinkedStatusManager").isLinked() &&
        (e =
          (t = r("WAWebHatchLinkedStatusManager").getLinkedStatus()) == null
            ? void 0
            : t.channelFbid) != null
        ? e
        : null;
    }
    async function k(e, t) {
      var n = !1,
        o = r("WAWebHatchLinkedStatusManager").subscribeToLinkedStatus(
          function (t) {
            var o,
              a = r("WAWebHatchLinkedStatusManager").getLinkedStatusState();
            (a === "unlinked" ||
              (a === "linked" &&
                ((o = t == null ? void 0 : t.channelFbid) != null
                  ? o
                  : null) !== e)) &&
              (n = !0);
          },
        );
      try {
        return await t(function () {
          return !n && D(e);
        });
      } finally {
        o();
      }
    }
    async function I(e, t) {
      var n = o("WAWebHatchVmTransport").confineWorkspaceMediaPath(e);
      return n == null
        ? x("unconfined_path")
        : t == null
          ? x("no_channel")
          : k(t, function (e) {
              return T(n, e);
            });
    }
    async function T(e, t) {
      if (!t()) return x("channel_changed");
      var n = await o("WAWebHatchVmConnection")
        .connectHatchVmApi()
        .catch(o("WAWebNullFunc").returnNull);
      if (n == null) return x("no_session");
      if (!t()) return x("channel_changed");
      var r = await n.request(
        "POST",
        o("WAWebHatchVmTransport").JarvisPaths.WORKSPACE_DELETE,
        {
          body: new TextEncoder().encode(
            JSON.stringify({ path: e, recursive: !1 }),
          ),
          responseShape: "flat-or-envelope",
        },
      );
      if (r.kind !== "Ok") {
        var a;
        return x(
          r.kind === "Rejected"
            ? "rejected." + ((a = r.statusCode) != null ? a : "none")
            : r.kind.toLowerCase(),
        );
      }
      return t() ? (L(e), !0) : x("channel_changed");
    }
    function D(e) {
      return e == null
        ? r(
            "WAWebHatchLinkedStatusManager",
          ).getLastConfirmedLinkedStatusState() == null
        : E() === e;
    }
    function x(t) {
      return (
        o("WALogger")
          .WARN(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "hatch-workspace-media: delete failed reason=",
                "",
              ])),
            t,
          )
          .sendLogs("hatch-workspace-media-delete-failed"),
        !1
      );
    }
    async function $(e, t) {
      var n = ++_;
      ((p = e), A());
      var r = await o(
        "WAWebHatchWorkspaceMediaPage",
      ).requestHatchWorkspaceMediaPage(t);
      _ === n && ((p = null), N(e, r), A(), r.kind === "loaded" && P());
    }
    function P() {
      s.length === 0 && u && p == null && $("more", c);
    }
    function N(e, t) {
      if (((m = e === "more" && t.kind === "failed"), t.kind === "failed")) {
        d = "failed";
        return;
      }
      ((d = "loaded"),
        (s = M(e === "refresh" ? t.items : [].concat(s, t.items))),
        (u = t.hasMore),
        (c = t.nextOffset));
    }
    function M(e) {
      var t = new Set();
      return e.filter(function (e) {
        var n = t.has(e.path);
        return (t.add(e.path), !n);
      });
    }
    function w() {
      return s.length > 0
        ? "loaded"
        : p != null
          ? "loading"
          : d === "failed"
            ? "error"
            : d === "loaded"
              ? "loaded"
              : d === "none"
                ? "loading"
                : (function () {
                    throw Error(
                      "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                        d,
                    );
                  })();
    }
    function A() {
      y = { hasMore: u, isLoadMoreFailed: m, items: s, status: w() };
      for (var e of Array.from(C)) e.listener();
    }
    function F() {
      var e, t;
      f ||
        ((f = !0),
        (g = r("WAWebHatchLinkedStatusManager").isLinked()),
        (h =
          g &&
          (e =
            (t = r("WAWebHatchLinkedStatusManager").getLinkedStatus()) == null
              ? void 0
              : t.channelFbid) != null
            ? e
            : null),
        r("WAWebHatchLinkedStatusManager").subscribeToLinkedStatus(O));
    }
    function O(e) {
      var t = r("WAWebHatchLinkedStatusManager").getLinkedStatusState();
      if (t === "unlinked") ((g = !1), (h = null), B());
      else if (t === "linked") {
        var n,
          o = (n = e == null ? void 0 : e.channelFbid) != null ? n : null,
          a = g ? o !== h : s.length > 0 || p != null;
        ((g = !0), (h = o), a && B());
      }
    }
    function B() {
      (_++,
        (s = []),
        (u = !1),
        (c = 0),
        (p = null),
        (d = "none"),
        o("WAWebHatchSpaceImages").clearHatchSpaceImages(),
        A(),
        C.size > 0 && $("refresh", 0));
    }
    ((l.getHatchWorkspaceMedia = b),
      (l.subscribeToHatchWorkspaceMedia = v),
      (l.refreshHatchWorkspaceMedia = S),
      (l.loadMoreHatchWorkspaceMedia = R),
      (l.removeHatchWorkspaceMediaItem = L),
      (l.pinHatchWorkspaceMediaChannel = E),
      (l.holdHatchWorkspaceMediaChannel = k),
      (l.deleteHatchWorkspaceMediaItem = I));
  },
  98,
);
