__d(
  "WAWebSpacerText.react",
  [
    "WAWebABPropsSaga",
    "WAWebClassnames",
    "WAWebClock",
    "WAWebFrontendMsgGetters",
    "WAWebLidMigrationUtils",
    "WAWebMessageMeta.react",
    "WAWebMsgGetters",
    "WAWebMsgType",
    "WAWebMsgViewCount",
    "WAWebNewsletterGatingUtils",
    "WAWebPinMsgGatingUtils",
    "WAWebQuotedMsgUtils",
    "WAWebTextSizeUtils",
    "WAWebThreadMsgUtils",
    "WAWebThreadsGating",
    "react",
    "react-compiler-runtime",
    "stylex",
    "useWAWebIsPinnedMsg",
    "useWAWebMsgValues",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u = s || (s = o("react")),
      c = {
        spacerContainer: {
          fontSize: "x1ncwhqj",
          display: "x3nfvp2",
          verticalAlign: "xxymvpz",
          visibility: "xlshs6z",
          height: "xqtp20y",
          paddingTop: "xexx8yu",
          paddingInlineEnd: "x1uc92m",
          paddingBottom: "x18d9i69",
          paddingInlineStart: "x181vq82",
          $$css: !0,
        },
      };
    function d(t) {
      var n,
        a = o("react-compiler-runtime").c(39),
        i = t.className,
        l = t.isFollowUpReply,
        s = t.msg,
        d = t.xstyle,
        m;
      if (a[0] === Symbol.for("react.memo_cache_sentinel")) {
        var p;
        ((m = [
          (p = o("WAWebMsgGetters")).getId,
          p.getBroadcast,
          p.getIsSentByMe,
          p.getStar,
          p.getType,
          p.getIsKept,
          p.getIsEdited,
          p.getIsBizBot1pResponse,
          p.getT,
          p.getIsCAPISupport,
        ]),
          (a[0] = m));
      } else m = a[0];
      var _ = o("useWAWebMsgValues").useMsgValues(s.id, m),
        f = _[0],
        g = _[1],
        h = _[2],
        y = _[3],
        C = _[4],
        b = _[5],
        v = _[6],
        S = _[7],
        R = _[8],
        L = _[9],
        E = o("WAWebMsgViewCount").useWAWebLocalizedViewCount(s.id),
        k = r("useWAWebIsPinnedMsg")(f),
        I = o("WAWebTextSizeUtils").getWAWebTextSizeStyles().metaTextStyles,
        T;
      a[1] !== s
        ? ((T = o("WAWebLidMigrationUtils").getShouldShowLidDebugUIForMsg(s)),
          (a[1] = s),
          (a[2] = T))
        : (T = a[2]);
      var D = T,
        x = [],
        $ = C === o("WAWebMsgType").MSG_TYPE.REVOKED,
        P = o("WAWebFrontendMsgGetters").getChat(s);
      if (
        E != null &&
        o("WAWebNewsletterGatingUtils").isNewsletterViewCountEnabled(
          P == null || (n = P.newsletterMetadata) == null
            ? void 0
            : n.membershipType,
        )
      ) {
        var N;
        a[3] === Symbol.for("react.memo_cache_sentinel")
          ? ((N = { className: "x1c4vz4f x2lah0s x14mko6t" }), (a[3] = N))
          : (N = a[3]);
        var M;
        a[4] === Symbol.for("react.memo_cache_sentinel")
          ? ((M = u.jsx(o("WAWebMessageMeta.react").MetaBullet, {})),
            (a[4] = M))
          : (M = a[4]);
        var w;
        (a[5] !== N || a[6] !== E
          ? ((w = u.jsxs(
              "span",
              babelHelpers.extends({}, N, { children: [E, M] }),
              "viewCount",
            )),
            (a[5] = N),
            (a[6] = E),
            (a[7] = w))
          : (w = a[7]),
          x.push(w));
      }
      if (y && !$) {
        var A;
        (a[8] === Symbol.for("react.memo_cache_sentinel")
          ? ((A = u.jsx(
              "span",
              { className: "x1c4vz4f x2lah0s x1xp8n7a" },
              "star",
            )),
            (a[8] = A))
          : (A = a[8]),
          x.push(A));
      }
      if (b && !$) {
        var F;
        (a[9] === Symbol.for("react.memo_cache_sentinel")
          ? ((F = u.jsx(
              "span",
              { className: "x1c4vz4f x2lah0s x1xp8n7a" },
              "kic",
            )),
            (a[9] = F))
          : (F = a[9]),
          x.push(F));
      }
      if (
        k &&
        o("WAWebPinMsgGatingUtils").isPinnedMessagesM1ReceiverEnabled() &&
        !$
      ) {
        var O;
        (a[10] === Symbol.for("react.memo_cache_sentinel")
          ? ((O = u.jsx(
              "span",
              { className: "x1c4vz4f x2lah0s x1xp8n7a" },
              "pin",
            )),
            (a[10] = O))
          : (O = a[10]),
          x.push(O));
      }
      var B = o("WAWebThreadMsgUtils").getMsgViewAllRepliesThread(s);
      if (
        l === !0 &&
        B != null &&
        o("WAWebQuotedMsgUtils").getMessagesCountByThreadId(B) >= 2 &&
        o("WAWebThreadsGating").isFollowUpReplyEnabled()
      ) {
        var W;
        (a[11] === Symbol.for("react.memo_cache_sentinel")
          ? ((W = u.jsx(
              "span",
              { className: "x1c4vz4f x2lah0s x1xp8n7a" },
              "followUpReply",
            )),
            (a[11] = W))
          : (W = a[11]),
          x.push(W));
      }
      if (g) {
        var q;
        (a[12] === Symbol.for("react.memo_cache_sentinel")
          ? ((q = u.jsx(
              "span",
              { className: "x1c4vz4f x2lah0s x1xp8n7a" },
              "broadcast",
            )),
            (a[12] = q))
          : (q = a[12]),
          x.push(q));
      }
      if (v && !$) {
        var U;
        (a[13] === Symbol.for("react.memo_cache_sentinel")
          ? ((U = u.jsx(
              "span",
              {
                className: "x1c4vz4f x2lah0s xk50ysn x2fvf9 xwklpps",
                children: o("WAWebMessageMeta.react").getEditedLabel(),
              },
              "edited",
            )),
            (a[13] = U))
          : (U = a[13]),
          x.push(U));
      }
      var V;
      a[14] !== s ? ((V = s.safe()), (a[14] = s), (a[15] = V)) : (V = a[15]);
      var H = o("WAWebMessageMeta.react").useBizBot1pLabel(V);
      if (H != null) {
        var G;
        a[16] === Symbol.for("react.memo_cache_sentinel")
          ? ((G = { className: "x1c4vz4f x2lah0s xk50ysn x2fvf9 xwklpps" }),
            (a[16] = G))
          : (G = a[16]);
        var z;
        (a[17] !== H
          ? ((z = u.jsx(
              "span",
              babelHelpers.extends({}, G, { children: H }),
              "bit-bot-label",
            )),
            (a[17] = H),
            (a[18] = z))
          : (z = a[18]),
          x.push(z));
        var j;
        (a[19] === Symbol.for("react.memo_cache_sentinel")
          ? ((j = u.jsx(
              "span",
              { className: "x1c4vz4f x2lah0s x6jxa94" },
              "biz-bot-icon",
            )),
            (a[19] = j))
          : (j = a[19]),
          x.push(j));
      }
      if (
        H == null &&
        L &&
        (S || o("WAWebMsgGetters").getIsSupportAIMessage(s)) &&
        o("WAWebABPropsSaga").getIsSagaV1Enabled()
      ) {
        var K;
        (a[20] === Symbol.for("react.memo_cache_sentinel")
          ? ((K = u.jsx(
              "span",
              { className: "x1c4vz4f x2lah0s x1849jeq" },
              "saga-message-marker",
            )),
            (a[20] = K))
          : (K = a[20]),
          x.push(K));
      }
      if ((D || h) && !$) {
        var Q = D ? "lid-debug-ui" : "checkmark",
          X;
        a[21] !== D
          ? ((X = {
              0: { className: "x1c4vz4f x2lah0s xn6xy2s" },
              1: { className: "x1c4vz4f x2lah0s xs2mk4o" },
            }[!!D << 0]),
            (a[21] = D),
            (a[22] = X))
          : (X = a[22]);
        var Y;
        (a[23] !== Q || a[24] !== X
          ? ((Y = u.jsx("span", babelHelpers.extends({}, X), Q)),
            (a[23] = Q),
            (a[24] = X),
            (a[25] = Y))
          : (Y = a[25]),
          x.push(Y));
      }
      if (D && $) {
        var J;
        (a[26] === Symbol.for("react.memo_cache_sentinel")
          ? ((J = u.jsx(
              "span",
              { className: "x1c4vz4f x2lah0s xs2mk4o" },
              "lid-debug-ui",
            )),
            (a[26] = J))
          : (J = a[26]),
          x.push(J));
      }
      var Z;
      a[27] === Symbol.for("react.memo_cache_sentinel")
        ? ((Z = { className: "x1c4vz4f x2lah0s" }), (a[27] = Z))
        : (Z = a[27]);
      var ee;
      a[28] !== R
        ? ((ee = R != null ? o("WAWebClock").Clock.timestampStr(R) : null),
          (a[28] = R),
          (a[29] = ee))
        : (ee = a[29]);
      var te;
      (a[30] !== ee
        ? ((te = u.jsx(
            "span",
            babelHelpers.extends({}, Z, { children: ee }),
            "timestamp",
          )),
          (a[30] = ee),
          (a[31] = te))
        : (te = a[31]),
        x.push(te));
      var ne;
      a[32] !== i || a[33] !== d
        ? ((ne = o("WAWebClassnames").classnamesConvertMeToStylexPlease(
            i,
            (e || (e = r("stylex")))(d),
          )),
          (a[32] = i),
          (a[33] = d),
          (a[34] = ne))
        : (ne = a[34]);
      var re =
          x.length > 0 &&
          u.jsx(
            "span",
            babelHelpers.extends(
              {},
              (e || (e = r("stylex"))).props(c.spacerContainer, I),
              { "aria-hidden": !0, children: x },
            ),
          ),
        oe;
      return (
        a[35] !== t.children || a[36] !== ne || a[37] !== re
          ? ((oe = u.jsxs("span", {
              className: ne,
              children: [t.children, re],
            })),
            (a[35] = t.children),
            (a[36] = ne),
            (a[37] = re),
            (a[38] = oe))
          : (oe = a[38]),
        oe
      );
    }
    l.default = d;
  },
  98,
);
