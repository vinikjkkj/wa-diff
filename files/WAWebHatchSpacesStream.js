__d(
  "WAWebHatchSpacesStream",
  [
    "WALogger",
    "WAWebHatchFilesState",
    "WAWebHatchFrontendGating",
    "WAWebHatchLinkedStatusManager",
    "WAWebHatchSpaceImages",
    "WAWebHatchSpacePreviews",
    "WAWebHatchSpacesDecoder",
    "WAWebHatchSpacesManager",
    "WAWebHatchVmConnection",
    "WAWebHatchVmSubscription",
    "WAWebHatchVmTransport",
    "WAWebNoop",
    "WAWebNullFunc",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u,
      c = 15e3,
      d = 15e3,
      m = new Set([401, 403, 404]),
      p = 0,
      _ = "idle",
      f = null,
      g = null,
      h = o("WAWebHatchFilesState").HATCH_FILES_INITIAL_STATE,
      y = !1,
      C = null,
      b = null,
      v = !1,
      S = !1,
      R = null,
      L = new Set(),
      E = new Set();
    function k() {
      (Y(), p++, p === 1 && N());
      var e = !1;
      return function () {
        e || ((e = !0), p--, p === 0 && Q());
      };
    }
    function I() {
      p === 0 || _ !== "error" || (Q(), N());
    }
    function T() {
      return _;
    }
    function D() {
      return h.files;
    }
    function x() {
      return y;
    }
    function $(e) {
      return ne(L, e);
    }
    function P(e) {
      return ne(E, e);
    }
    function N() {
      if (
        !(f != null || !o("WAWebHatchFrontendGating").isHatchSpaceEnabled())
      ) {
        if (r("WAWebHatchLinkedStatusManager").isUnlinked()) {
          te("unlinked");
          return;
        }
        r("WAWebHatchSpacesManager").hasAppliedSnapshot()
          ? te("loaded")
          : (te("loading"), H());
        var e = new (r("WAWebHatchVmSubscription"))({
          connect: function () {
            return w(e);
          },
          kind: "navigation",
          onEvent: q,
          onResubscribed: r("WAWebNoop"),
          open: function (n, r) {
            return n.openEventSubscription(
              o("WAWebHatchVmTransport").JarvisPaths.NAVIGATION_SUBSCRIBE,
              B(e, r, function (e) {
                return X("status_" + e);
              }),
            );
          },
        });
        ((f = e), e.start(), M());
      }
    }
    function M() {
      h.files == null && (y && ((y = !1), re(E)), z());
      var e = new (r("WAWebHatchVmSubscription"))({
        connect: function () {
          return w(e);
        },
        kind: "artifacts",
        onEvent: U,
        onResubscribed: function () {
          return V(o("WAWebHatchFilesState").dropHatchFilesPendingSnapshot(h));
        },
        open: function (n, r) {
          return n.openEventSubscription(
            o("WAWebHatchVmTransport").JarvisPaths.ARTIFACTS_SUBSCRIBE,
            B(e, r, W),
          );
        },
      });
      ((g = e), e.start());
    }
    function w(e) {
      return A.apply(this, arguments);
    }
    function A() {
      return (
        (A = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          if (!F(e)) return null;
          var t = yield o("WAWebHatchVmConnection")
            .connectHatchVmApi()
            .catch(o("WAWebNullFunc").returnNull);
          return F(e) ? (t == null && X("no_session"), t) : null;
        })),
        A.apply(this, arguments)
      );
    }
    function F(e) {
      return O(e)
        ? o("WAWebHatchFrontendGating").isHatchSpaceEnabled()
          ? r("WAWebHatchLinkedStatusManager").isUnlinked()
            ? (Q(), te("unlinked"), !1)
            : !0
          : (Q(), _ === "loading" && te("error"), !1)
        : !1;
    }
    function O(e) {
      return e === f || e === g;
    }
    function B(e, t, n) {
      return babelHelpers.extends({}, t, {
        onResponse: function (o) {
          if (O(e) && m.has(o)) {
            n(o);
            return;
          }
          t.onResponse(o);
        },
      });
    }
    function W(t) {
      var n = g;
      ((g = null),
        n == null || n.stop(),
        K(),
        o("WALogger")
          .WARN(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "hatch-spaces-stream/library-stopped reason=status_",
                "",
              ])),
            t,
          )
          .sendLogs("hatch-spaces-stream-library-stopped"));
    }
    function q(e) {
      var t = o("WAWebHatchSpacesDecoder").decodeHatchSpacesEvent(
        e.name,
        e.payload,
        e.tsMs,
      );
      t != null &&
        (r("WAWebHatchSpacesManager").applyEvent(t),
        (_ === "loading" || _ === "error") &&
          r("WAWebHatchSpacesManager").hasAppliedSnapshot() &&
          (G(), te("loaded")));
    }
    function U(e) {
      (V(o("WAWebHatchFilesState").applyHatchFilesEvent(h, e.name, e.payload)),
        h.files != null && K());
    }
    function V(e) {
      var t = e.files !== h.files;
      ((h = e), t && re(E));
    }
    function H() {
      (G(),
        (C = self.setTimeout(function () {
          ((C = null),
            _ === "loading" &&
              (o("WALogger")
                .WARN(
                  s ||
                    (s = babelHelpers.taggedTemplateLiteralLoose([
                      "hatch-spaces-stream/timeout",
                    ])),
                )
                .sendLogs("hatch-spaces-stream-timeout"),
              te("error")));
        }, c)));
    }
    function G() {
      C != null && (self.clearTimeout(C), (C = null));
    }
    function z() {
      (j(),
        (b = self.setTimeout(function () {
          ((b = null), K());
        }, d)));
    }
    function j() {
      b != null && (self.clearTimeout(b), (b = null));
    }
    function K() {
      (j(), y || ((y = !0), re(E)));
    }
    function Q() {
      var e = f,
        t = g;
      ((f = null),
        (g = null),
        G(),
        j(),
        e == null || e.stop(),
        t == null || t.stop());
    }
    function X(e) {
      (Q(),
        o("WALogger")
          .WARN(
            u ||
              (u = babelHelpers.taggedTemplateLiteralLoose([
                "hatch-spaces-stream/stopped reason=",
                "",
              ])),
            e,
          )
          .sendLogs("hatch-spaces-stream-stopped"),
        te("error"));
    }
    function Y() {
      var e, t;
      v ||
        ((v = !0),
        (S = r("WAWebHatchLinkedStatusManager").isLinked()),
        (R =
          S &&
          (e =
            (t = r("WAWebHatchLinkedStatusManager").getLinkedStatus()) == null
              ? void 0
              : t.channelFbid) != null
            ? e
            : null),
        r("WAWebHatchLinkedStatusManager").subscribeToLinkedStatus(J));
    }
    function J(e) {
      var t = r("WAWebHatchLinkedStatusManager").getLinkedStatusState();
      if (t === "unlinked")
        ((S = !1),
          (R = null),
          Q(),
          r("WAWebHatchSpacesManager").reset(),
          ee(),
          o("WAWebHatchSpacePreviews").clearHatchSpacePreviewRoutes(),
          o("WAWebHatchSpaceImages").clearHatchSpaceImages(),
          te("unlinked"));
      else if (t === "linked") {
        var n;
        Z((n = e == null ? void 0 : e.channelFbid) != null ? n : null);
      }
    }
    function Z(e) {
      var t = S && e !== R;
      if (((S = !0), (R = e), t))
        (Q(),
          r("WAWebHatchSpacesManager").reset(),
          ee(),
          o("WAWebHatchSpacePreviews").clearHatchSpacePreviewRoutes(),
          o("WAWebHatchSpaceImages").clearHatchSpaceImages());
      else if (_ !== "unlinked") return;
      p > 0 ? N() : te("idle");
    }
    function ee() {
      ((h = o("WAWebHatchFilesState").HATCH_FILES_INITIAL_STATE),
        (y = !1),
        re(E));
    }
    function te(e) {
      _ !== e && ((_ = e), re(L));
    }
    function ne(e, t) {
      var n = { listener: t };
      return (
        e.add(n),
        function () {
          e.delete(n);
        }
      );
    }
    function re(e) {
      for (var t of Array.from(e)) t.listener();
    }
    ((l.SPACES_SNAPSHOT_DEADLINE_MS = c),
      (l.LIBRARY_SNAPSHOT_DEADLINE_MS = d),
      (l.retainHatchSpacesStream = k),
      (l.retryHatchSpacesStream = I),
      (l.getHatchSpacesLoadStatus = T),
      (l.getHatchLibraryFiles = D),
      (l.isHatchLibrarySettled = x),
      (l.subscribeToHatchSpacesLoad = $),
      (l.subscribeToHatchLibrary = P),
      (l.watchHatchSpacesLinkedStatus = Y));
  },
  98,
);
