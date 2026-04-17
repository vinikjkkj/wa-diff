__d(
  "cometUFIComposerAvatarPlugin",
  [
    "fbt",
    "CometRelay",
    "CometUFIComposerPreviewArea.react",
    "CometUFIInsertAvatarStickerComposerActionForLexical.react",
    "FBLogger",
    "FDSProgressIndicator.react",
    "cometUFIComposerAvatarPlugin_plugin.graphql",
    "cometUFIComposerAvatarPlugin_pluginData.graphql",
    "gkx",
    "react",
    "react-compiler-runtime",
    "requireDeferred",
    "useDeferredModuleOnReady",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e,
      u,
      c,
      d = c || (c = o("react")),
      m = c,
      p = m.useCallback,
      _ = m.useEffect,
      f = r("requireDeferred")(
        "CometUFIStickersComposerUpgradedPreviewContent.react",
      ).__setRef("cometUFIComposerAvatarPlugin"),
      g = r("gkx")("1315"),
      h = r("gkx")("4088");
    function y(e) {
      return e.attachment && e.attachment.__type === "AvatarSticker"
        ? e.attachment.id
        : null;
    }
    e !== void 0 || (e = n("cometUFIComposerAvatarPlugin_plugin.graphql"));
    function C(e) {
      var t = o("react-compiler-runtime").c(18),
        n = e.pluginProps,
        a = n.addAttachmentMapper,
        i = n.composerState,
        l = n.setComposerState,
        u;
      t[0] !== i ? ((u = y(i)), (t[0] = i), (t[1] = u)) : (u = t[1]);
      var c = u,
        m;
      t[2] !== l
        ? ((m = function () {
            l(S);
          }),
          (t[2] = l),
          (t[3] = m))
        : (m = t[3]);
      var p = m,
        g;
      t[4] !== l
        ? ((g = function (t) {
            (l(v),
              r("FBLogger")("UFIOutlinePlugin")
                .catching(t)
                .mustfix("Encountered an error while rendering a sticker."));
          }),
          (t[4] = l),
          (t[5] = g))
        : (g = t[5]);
      var h = g,
        C = r("useDeferredModuleOnReady")(f),
        R,
        L;
      (t[6] !== a
        ? ((R = function () {
            return a(b);
          }),
          (L = [a]),
          (t[6] = a),
          (t[7] = R),
          (t[8] = L))
        : ((R = t[7]), (L = t[8])),
        _(R, L));
      var E;
      t[9] === Symbol.for("react.memo_cache_sentinel")
        ? ((E = d.jsx(r("FDSProgressIndicator.react"), { size: "small" })),
          (t[9] = E))
        : (E = t[9]);
      var k = E,
        I;
      t[10] === Symbol.for("react.memo_cache_sentinel")
        ? ((I = { className: "x1iyjqo2" }), (t[10] = I))
        : (I = t[10]);
      var T;
      t[11] !== C || t[12] !== c || t[13] !== p || t[14] !== h
        ? ((T =
            c != null
              ? d.jsx(r("CometUFIComposerPreviewArea.react"), {
                  label: s._(/*BTDS*/ "Remove sticker"),
                  onRemove: p,
                  removeAnnouncement: s._(
                    /*BTDS*/ "The sticker was successfully deleted",
                  ),
                  children:
                    C == null
                      ? k
                      : d.jsx(C, {
                          loadingIndicatorElement: k,
                          onError: h,
                          stickerId: c,
                        }),
                })
              : null),
          (t[11] = C),
          (t[12] = c),
          (t[13] = p),
          (t[14] = h),
          (t[15] = T))
        : (T = t[15]);
      var D;
      return (
        t[16] !== T
          ? ((D = d.jsx("div", babelHelpers.extends({}, I, { children: T }))),
            (t[16] = T),
            (t[17] = D))
          : (D = t[17]),
        D
      );
    }
    function b(e) {
      return e.__type === "AvatarSticker" ? { media: { id: e.id } } : null;
    }
    function v() {
      return { attachment: null };
    }
    function S() {
      return { attachment: null };
    }
    function R(e) {
      var t = e.pluginProps,
        n = t.composerState;
      return !n || !n.attachment
        ? r("CometUFIInsertAvatarStickerComposerActionForLexical.react")
        : null;
    }
    function L(e) {
      var t,
        r = e.fragmentKey,
        a = o("CometRelay").readInlineData(
          u !== void 0
            ? u
            : (u = n("cometUFIComposerAvatarPlugin_pluginData.graphql")),
          r,
        ),
        i =
          g && h && (a == null ? void 0 : a.avatar_style_version) === "STYLE_1";
      return {
        above: null,
        action: R,
        below: C,
        id: "avatars",
        inside: null,
        props: {
          displayUpgradeToStyle2: i,
          hasAvatar: (t = a.has_avatar) != null ? t : !1,
          postID: a.feedback_id,
        },
      };
    }
    l.default = L;
  },
  226,
);
