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
    "asyncToGeneratorRuntime",
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
      q();
      var t = { listener: e };
      return (
        C.add(t),
        function () {
          C.delete(t);
        }
      );
    }
    function S() {
      (q(), p !== "refresh" && M("refresh", 0));
    }
    function R() {
      p == null && u && M("more", c);
    }
    function L(e) {
      var t = s.filter(function (t) {
        return t.path !== e;
      });
      t.length !== s.length && ((s = t), (c -= 1), _++, (p = null), W(), A());
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
    function k(e, t) {
      return I.apply(this, arguments);
    }
    function I() {
      return (
        (I = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
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
            return yield t(function () {
              return !n && P(e);
            });
          } finally {
            o();
          }
        })),
        I.apply(this, arguments)
      );
    }
    function T(e, t) {
      return D.apply(this, arguments);
    }
    function D() {
      return (
        (D = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n = o("WAWebHatchVmTransport").confineWorkspaceMediaPath(e);
          return n == null
            ? N("unconfined_path")
            : t == null
              ? N("no_channel")
              : k(t, function (e) {
                  return x(n, e);
                });
        })),
        D.apply(this, arguments)
      );
    }
    function x(e, t) {
      return $.apply(this, arguments);
    }
    function $() {
      return (
        ($ = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          if (!t()) return N("channel_changed");
          var n = yield o("WAWebHatchVmConnection")
            .connectHatchVmApi()
            .catch(o("WAWebNullFunc").returnNull);
          if (n == null) return N("no_session");
          if (!t()) return N("channel_changed");
          var r = yield n.request(
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
            return N(
              r.kind === "Rejected"
                ? "rejected." + ((a = r.statusCode) != null ? a : "none")
                : r.kind.toLowerCase(),
            );
          }
          return t() ? (L(e), !0) : N("channel_changed");
        })),
        $.apply(this, arguments)
      );
    }
    function P(e) {
      return e == null
        ? r(
            "WAWebHatchLinkedStatusManager",
          ).getLastConfirmedLinkedStatusState() == null
        : E() === e;
    }
    function N(t) {
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
    function M(e, t) {
      return w.apply(this, arguments);
    }
    function w() {
      return (
        (w = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n = ++_;
          ((p = e), W());
          var r = yield o(
            "WAWebHatchWorkspaceMediaPage",
          ).requestHatchWorkspaceMediaPage(t);
          _ === n && ((p = null), F(e, r), W(), r.kind === "loaded" && A());
        })),
        w.apply(this, arguments)
      );
    }
    function A() {
      s.length === 0 && u && p == null && M("more", c);
    }
    function F(e, t) {
      if (((m = e === "more" && t.kind === "failed"), t.kind === "failed")) {
        d = "failed";
        return;
      }
      ((d = "loaded"),
        (s = O(e === "refresh" ? t.items : [].concat(s, t.items))),
        (u = t.hasMore),
        (c = t.nextOffset));
    }
    function O(e) {
      var t = new Set();
      return e.filter(function (e) {
        var n = t.has(e.path);
        return (t.add(e.path), !n);
      });
    }
    function B() {
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
    function W() {
      y = { hasMore: u, isLoadMoreFailed: m, items: s, status: B() };
      for (var e of Array.from(C)) e.listener();
    }
    function q() {
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
        r("WAWebHatchLinkedStatusManager").subscribeToLinkedStatus(U));
    }
    function U(e) {
      var t = r("WAWebHatchLinkedStatusManager").getLinkedStatusState();
      if (t === "unlinked") ((g = !1), (h = null), V());
      else if (t === "linked") {
        var n,
          o = (n = e == null ? void 0 : e.channelFbid) != null ? n : null,
          a = g ? o !== h : s.length > 0 || p != null;
        ((g = !0), (h = o), a && V());
      }
    }
    function V() {
      (_++,
        (s = []),
        (u = !1),
        (c = 0),
        (p = null),
        (d = "none"),
        o("WAWebHatchSpaceImages").clearHatchSpaceImages(),
        W(),
        C.size > 0 && M("refresh", 0));
    }
    ((l.getHatchWorkspaceMedia = b),
      (l.subscribeToHatchWorkspaceMedia = v),
      (l.refreshHatchWorkspaceMedia = S),
      (l.loadMoreHatchWorkspaceMedia = R),
      (l.removeHatchWorkspaceMediaItem = L),
      (l.pinHatchWorkspaceMediaChannel = E),
      (l.holdHatchWorkspaceMediaChannel = k),
      (l.deleteHatchWorkspaceMediaItem = T));
  },
  98,
);
