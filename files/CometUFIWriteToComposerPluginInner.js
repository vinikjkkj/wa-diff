__d(
  "CometUFIWriteToComposerPluginInner",
  [
    "CometUFIConversationGuideContext",
    "Lexical",
    "react",
    "react-compiler-runtime",
    "useCometUFILexicalEmptyListeners",
    "vulture",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react")),
      u = s.useCallback,
      c = s.useContext,
      d = s.useLayoutEffect;
    function m(e) {
      var t = o("react-compiler-runtime").c(29),
        n = e.pluginProps,
        a = n.addEmptyListener,
        i = n.editor,
        l = n.setComposerState,
        s = c(r("CometUFIConversationGuideContext")),
        u = s.onComposerEmptyStateChange,
        m = s.setAddGiphyStickerToComposer,
        p = s.setAddStickerToComposer,
        _ = s.setGetIsComposerEmpty,
        f = s.setWriteToComposer,
        g = s.unsetAddGiphyStickerToComposer,
        h = s.unsetAddStickerToComposer,
        y = s.unsetWriteToComposer,
        C = o("useCometUFILexicalEmptyListeners").useCometUFILexicalIsEmpty(a),
        b,
        v;
      (t[0] !== C || t[1] !== u
        ? ((b = function () {
            u(C);
          }),
          (v = [C, u]),
          (t[0] = C),
          (t[1] = u),
          (t[2] = b),
          (t[3] = v))
        : ((b = t[2]), (v = t[3])),
        d(b, v));
      var S;
      t[4] !== C
        ? ((S = function () {
            return C;
          }),
          (t[4] = C),
          (t[5] = S))
        : (S = t[5]);
      var R = S,
        L,
        E;
      (t[6] !== R || t[7] !== _
        ? ((L = function () {
            _(function () {
              return R;
            });
          }),
          (E = [R, _]),
          (t[6] = R),
          (t[7] = _),
          (t[8] = L),
          (t[9] = E))
        : ((L = t[8]), (E = t[9])),
        d(L, E));
      var k;
      t[10] !== i
        ? ((k = function (t) {
            i.focus(function () {
              i.update(function () {
                var e = o("Lexical").$getSelection();
                o("Lexical").$isRangeSelection(e) && e.insertText(t);
              });
            });
          }),
          (t[10] = i),
          (t[11] = k))
        : (k = t[11]);
      var I = k,
        T;
      t[12] !== i || t[13] !== l
        ? ((T = function (t) {
            var e = function (n) {
              return babelHelpers.extends({}, n, {
                attachment: { __type: "Sticker", id: t },
                updateSource: "ConversationGuide",
              });
            };
            (l(e), i.focus());
          }),
          (t[12] = i),
          (t[13] = l),
          (t[14] = T))
        : (T = t[14]);
      var D = T,
        x;
      t[15] !== i || t[16] !== l
        ? ((x = function (t) {
            var e = {
                cursor: "",
                media: {
                  preview: {
                    durationMs: 0,
                    height: 40,
                    label: "",
                    sizeBytes: 0,
                    url: t,
                    width: 40,
                  },
                },
                platformFBID: "",
                resultID: "",
                source: {
                  durationMs: 0,
                  gifSource: "GIPHY",
                  height: 40,
                  mimeType: "",
                  sizeBytes: 0,
                  tags: [],
                  title: "",
                  url: t,
                  width: 40,
                },
                type: 0,
              },
              n = function (n) {
                return babelHelpers.extends({}, n, {
                  attachment: { __type: "GIF", data: e },
                  updateSource: "ConversationGuide",
                });
              };
            (l(n), i.focus());
          }),
          (t[15] = i),
          (t[16] = l),
          (t[17] = x))
        : (x = t[17]);
      var $ = x,
        P,
        N;
      return (
        t[18] !== $ ||
        t[19] !== D ||
        t[20] !== m ||
        t[21] !== p ||
        t[22] !== f ||
        t[23] !== g ||
        t[24] !== h ||
        t[25] !== y ||
        t[26] !== I
          ? ((N = function () {
              return (
                f(I),
                p(D),
                m($),
                function () {
                  (r("vulture")("y0DknKXqz6GVfAy8tU9EN62i5JE="), y(), h(), g());
                }
              );
            }),
            (P = [f, y, I, p, D, h, m, g, $]),
            (t[18] = $),
            (t[19] = D),
            (t[20] = m),
            (t[21] = p),
            (t[22] = f),
            (t[23] = g),
            (t[24] = h),
            (t[25] = y),
            (t[26] = I),
            (t[27] = P),
            (t[28] = N))
          : ((P = t[27]), (N = t[28])),
        d(N, P),
        null
      );
    }
    l.default = m;
  },
  98,
);
