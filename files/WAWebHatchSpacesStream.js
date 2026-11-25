__d(
  "WAWebHatchSpacesStream",
  [
    "WALogger",
    "WAWebHatchFilesState",
    "WAWebHatchFrontendGating",
    "WAWebHatchJsonReaders",
    "WAWebHatchLinkedStatusManager",
    "WAWebHatchSpaceImages",
    "WAWebHatchSpacePreviews",
    "WAWebHatchSpacesCatalog",
    "WAWebHatchSpacesDecoder",
    "WAWebHatchSpacesManager",
    "WAWebHatchSpacesState",
    "WAWebHatchVmConnection",
    "WAWebHatchVmSubscription",
    "WAWebHatchVmTransport",
    "WAWebNoop",
    "WAWebNullFunc",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u,
      c,
      d = 15e3,
      m = 15e3,
      p = { capabilities: ["spaces_placement"] },
      _ = new Set([401, 403, 404]),
      f = 0,
      g = "idle",
      h = null,
      y = null,
      C = null,
      b = o("WAWebHatchSpacesState").EMPTY_HATCH_SPACES_STATE,
      v = o("WAWebHatchSpacesCatalog").hatchSpacesCatalog(
        o("WAWebHatchSpacesState").EMPTY_HATCH_SPACES_STATE,
      ),
      S = null,
      R = !1,
      L = o("WAWebHatchFilesState").HATCH_FILES_INITIAL_STATE,
      E = !1,
      k = null,
      I = null,
      T = !1,
      D = !1,
      x = null,
      $ = new Set(),
      P = new Set(),
      N = new Set();
    function M() {
      (me(), f++, f === 1 && H());
      var e = !1;
      return function () {
        e || ((e = !0), f--, f === 0 && ce());
      };
    }
    function w() {
      f === 0 || g !== "error" || (ce(), H());
    }
    function A() {
      return g;
    }
    function F() {
      return L.files;
    }
    function O(e) {
      var t;
      return (t = L.spaceCapabilities.get(e)) != null ? t : null;
    }
    function B() {
      return E;
    }
    function W(e) {
      return ye($, e);
    }
    function q(e) {
      return ye(P, e);
    }
    function U() {
      return S === !0 ? v : null;
    }
    function V(e) {
      return ye(N, e);
    }
    function H() {
      if (
        !(h != null || !o("WAWebHatchFrontendGating").isHatchSpaceEnabled())
      ) {
        if (r("WAWebHatchLinkedStatusManager").isUnlinked()) {
          he("unlinked");
          return;
        }
        r("WAWebHatchSpacesManager").hasAppliedSnapshot()
          ? he("loaded")
          : (he("loading"), ae());
        var e = new (r("WAWebHatchVmSubscription"))({
          connect: function () {
            return j(e);
          },
          kind: "navigation",
          onEvent: ne,
          onResubscribed: r("WAWebNoop"),
          open: function (n, r) {
            return n.openEventSubscription(
              o("WAWebHatchVmTransport").JarvisPaths.NAVIGATION_SUBSCRIBE,
              X(e, r, function (e) {
                return de("status_" + e);
              }),
            );
          },
        });
        ((h = e), e.start(), z(), G());
      }
    }
    function G() {
      ee();
      var e = new (r("WAWebHatchVmSubscription"))({
        connect: function () {
          return j(e);
        },
        kind: "navigation_sidebar",
        onEvent: Z,
        onResubscribed: ee,
        open: function (n, r) {
          return n.openEventSubscription(
            o("WAWebHatchVmTransport").JarvisPaths.NAVIGATION_SUBSCRIBE,
            X(e, r, J),
            p,
          );
        },
      });
      ((C = e), e.start());
    }
    function z() {
      L.files == null && (E && ((E = !1), Ce(P)), le());
      var e = new (r("WAWebHatchVmSubscription"))({
        connect: function () {
          return j(e);
        },
        kind: "artifacts",
        onEvent: re,
        onResubscribed: function () {
          return oe(o("WAWebHatchFilesState").dropHatchFilesPendingSnapshot(L));
        },
        open: function (n, r) {
          return n.openEventSubscription(
            o("WAWebHatchVmTransport").JarvisPaths.ARTIFACTS_SUBSCRIBE,
            X(e, r, Y),
          );
        },
      });
      ((y = e), e.start());
    }
    async function j(e) {
      if (!K(e)) return null;
      var t = await o("WAWebHatchVmConnection")
        .connectHatchVmApi()
        .catch(o("WAWebNullFunc").returnNull);
      return K(e) ? (t == null && de("no_session"), t) : null;
    }
    function K(e) {
      return Q(e)
        ? o("WAWebHatchFrontendGating").isHatchSpaceEnabled()
          ? r("WAWebHatchLinkedStatusManager").isUnlinked()
            ? (ce(), he("unlinked"), !1)
            : !0
          : (ce(), g === "loading" && he("error"), !1)
        : !1;
    }
    function Q(e) {
      return e === h || e === y || e === C;
    }
    function X(e, t, n) {
      return babelHelpers.extends({}, t, {
        onResponse: function (o) {
          if (Q(e) && _.has(o)) {
            n(o);
            return;
          }
          t.onResponse(o);
        },
      });
    }
    function Y(t) {
      var n = y;
      ((y = null),
        n == null || n.stop(),
        ue(),
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
    function J(e) {
      var t = C;
      ((C = null),
        t == null || t.stop(),
        te(null),
        o("WALogger")
          .WARN(
            s ||
              (s = babelHelpers.taggedTemplateLiteralLoose([
                "hatch-spaces-stream/sidebar-stopped reason=status_",
                "",
              ])),
            e,
          )
          .sendLogs("hatch-spaces-stream-sidebar-stopped"));
    }
    function Z(e) {
      var t = o("WAWebHatchSpacesDecoder").decodeHatchSpacesEvent(
        e.name,
        e.payload,
        e.tsMs,
      );
      if (t != null) {
        var n = o("WAWebHatchSpacesState").reduceHatchSpacesEvent(b, t);
        if (n !== b) {
          t.kind === "snapshot_chunk" &&
            t.chunkNumber === 1 &&
            (R =
              o("WAWebHatchJsonReaders").readBool(
                e.payload,
                "spaces_enabled",
              ) === !0);
          var r = n.snapshotsApplied !== b.snapshotsApplied;
          ((b = n),
            (v = o("WAWebHatchSpacesCatalog").hatchSpacesCatalog(n)),
            r && (S = R),
            Ce(N));
        }
      }
    }
    function ee() {
      ((R = !1),
        b.pendingSnapshot != null &&
          (b = babelHelpers.extends({}, b, { pendingSnapshot: null })));
    }
    function te(e) {
      S !== e && ((S = e), Ce(N));
    }
    function ne(e) {
      var t = o("WAWebHatchSpacesDecoder").decodeHatchSpacesEvent(
        e.name,
        e.payload,
        e.tsMs,
      );
      t != null &&
        (r("WAWebHatchSpacesManager").applyEvent(t),
        (g === "loading" || g === "error") &&
          r("WAWebHatchSpacesManager").hasAppliedSnapshot() &&
          (ie(), he("loaded")));
    }
    function re(e) {
      (oe(o("WAWebHatchFilesState").applyHatchFilesEvent(L, e.name, e.payload)),
        L.files != null && ue());
    }
    function oe(e) {
      var t =
        e.files !== L.files || e.spaceCapabilities !== L.spaceCapabilities;
      ((L = e), t && Ce(P));
    }
    function ae() {
      (ie(),
        (k = self.setTimeout(function () {
          ((k = null),
            g === "loading" &&
              (o("WALogger")
                .WARN(
                  u ||
                    (u = babelHelpers.taggedTemplateLiteralLoose([
                      "hatch-spaces-stream/timeout",
                    ])),
                )
                .sendLogs("hatch-spaces-stream-timeout"),
              he("error")));
        }, d)));
    }
    function ie() {
      k != null && (self.clearTimeout(k), (k = null));
    }
    function le() {
      (se(),
        (I = self.setTimeout(function () {
          ((I = null), ue());
        }, m)));
    }
    function se() {
      I != null && (self.clearTimeout(I), (I = null));
    }
    function ue() {
      (se(), E || ((E = !0), Ce(P)));
    }
    function ce() {
      var e = h,
        t = y,
        n = C;
      ((h = null),
        (y = null),
        (C = null),
        ie(),
        se(),
        e == null || e.stop(),
        t == null || t.stop(),
        n == null || n.stop());
    }
    function de(e) {
      (ce(),
        o("WALogger")
          .WARN(
            c ||
              (c = babelHelpers.taggedTemplateLiteralLoose([
                "hatch-spaces-stream/stopped reason=",
                "",
              ])),
            e,
          )
          .sendLogs("hatch-spaces-stream-stopped"),
        he("error"));
    }
    function me() {
      var e, t;
      T ||
        ((T = !0),
        (D = r("WAWebHatchLinkedStatusManager").isLinked()),
        (x =
          D &&
          (e =
            (t = r("WAWebHatchLinkedStatusManager").getLinkedStatus()) == null
              ? void 0
              : t.channelFbid) != null
            ? e
            : null),
        r("WAWebHatchLinkedStatusManager").subscribeToLinkedStatus(pe));
    }
    function pe(e) {
      var t = r("WAWebHatchLinkedStatusManager").getLinkedStatusState();
      if (t === "unlinked")
        ((D = !1),
          (x = null),
          ce(),
          r("WAWebHatchSpacesManager").reset(),
          ge(),
          fe(),
          o("WAWebHatchSpacePreviews").clearHatchSpacePreviewRoutes(),
          o("WAWebHatchSpaceImages").clearHatchSpaceImages(),
          he("unlinked"));
      else if (t === "linked") {
        var n;
        _e((n = e == null ? void 0 : e.channelFbid) != null ? n : null);
      }
    }
    function _e(e) {
      var t = D && e !== x;
      if (((D = !0), (x = e), t))
        (ce(),
          r("WAWebHatchSpacesManager").reset(),
          ge(),
          fe(),
          o("WAWebHatchSpacePreviews").clearHatchSpacePreviewRoutes(),
          o("WAWebHatchSpaceImages").clearHatchSpaceImages());
      else if (g !== "unlinked") return;
      f > 0 ? H() : he("idle");
    }
    function fe() {
      ((b = o("WAWebHatchSpacesState").EMPTY_HATCH_SPACES_STATE),
        (v = o("WAWebHatchSpacesCatalog").hatchSpacesCatalog(
          o("WAWebHatchSpacesState").EMPTY_HATCH_SPACES_STATE,
        )),
        (R = !1),
        (S = null),
        Ce(N));
    }
    function ge() {
      ((L = o("WAWebHatchFilesState").HATCH_FILES_INITIAL_STATE),
        (E = !1),
        Ce(P));
    }
    function he(e) {
      g !== e && ((g = e), Ce($));
    }
    function ye(e, t) {
      var n = { listener: t };
      return (
        e.add(n),
        function () {
          e.delete(n);
        }
      );
    }
    function Ce(e) {
      for (var t of Array.from(e)) t.listener();
    }
    ((l.SPACES_SNAPSHOT_DEADLINE_MS = d),
      (l.LIBRARY_SNAPSHOT_DEADLINE_MS = m),
      (l.SIDEBAR_SPACES_SUBSCRIBE_BODY = p),
      (l.retainHatchSpacesStream = M),
      (l.retryHatchSpacesStream = w),
      (l.getHatchSpacesLoadStatus = A),
      (l.getHatchLibraryFiles = F),
      (l.getHatchSpaceCapabilities = O),
      (l.isHatchLibrarySettled = B),
      (l.subscribeToHatchSpacesLoad = W),
      (l.subscribeToHatchLibrary = q),
      (l.getHatchSidebarSpacesCatalog = U),
      (l.subscribeToHatchSidebarSpaces = V),
      (l.watchHatchSpacesLinkedStatus = me));
  },
  98,
);
