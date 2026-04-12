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
        a,
        i = t.className,
        l = t.isFollowUpReply,
        s = t.msg,
        d = t.xstyle,
        m = o("useWAWebMsgValues").useMsgValues(s.id, [
          (a = o("WAWebMsgGetters")).getId,
          a.getBroadcast,
          a.getIsSentByMe,
          a.getStar,
          a.getType,
          a.getIsKept,
          a.getIsEdited,
          a.getIsBizBot1pResponse,
          a.getT,
          a.getIsCAPISupport,
        ]),
        p = m[0],
        _ = m[1],
        f = m[2],
        g = m[3],
        h = m[4],
        y = m[5],
        C = m[6],
        b = m[7],
        v = m[8],
        S = m[9],
        R = o("WAWebMsgViewCount").useWAWebLocalizedViewCount(s.id),
        L = r("useWAWebIsPinnedMsg")(p),
        E = o("WAWebTextSizeUtils").getWAWebTextSizeStyles().metaTextStyles,
        k = o("WAWebLidMigrationUtils").getShouldShowLidDebugUIForMsg(s),
        I = [],
        T = h === o("WAWebMsgType").MSG_TYPE.REVOKED,
        D = o("WAWebFrontendMsgGetters").getChat(s);
      (R != null &&
        o("WAWebNewsletterGatingUtils").isNewsletterViewCountEnabled(
          D == null || (n = D.newsletterMetadata) == null
            ? void 0
            : n.membershipType,
        ) &&
        I.push(
          u.jsxs(
            "span",
            {
              className: "x1c4vz4f x2lah0s x14mko6t",
              children: [R, u.jsx(o("WAWebMessageMeta.react").MetaBullet, {})],
            },
            "viewCount",
          ),
        ),
        g &&
          !T &&
          I.push(
            u.jsx("span", { className: "x1c4vz4f x2lah0s x1xp8n7a" }, "star"),
          ),
        y &&
          !T &&
          I.push(
            u.jsx("span", { className: "x1c4vz4f x2lah0s x1xp8n7a" }, "kic"),
          ),
        L &&
          o("WAWebPinMsgGatingUtils").isPinnedMessagesM1ReceiverEnabled() &&
          !T &&
          I.push(
            u.jsx("span", { className: "x1c4vz4f x2lah0s x1xp8n7a" }, "pin"),
          ));
      var x = o("WAWebThreadMsgUtils").getMsgViewAllRepliesThread(s);
      (l === !0 &&
        x != null &&
        o("WAWebQuotedMsgUtils").getMessagesCountByThreadId(x) >= 2 &&
        o("WAWebThreadsGating").isFollowUpReplyEnabled() &&
        I.push(
          u.jsx(
            "span",
            { className: "x1c4vz4f x2lah0s x1xp8n7a" },
            "followUpReply",
          ),
        ),
        _ &&
          I.push(
            u.jsx(
              "span",
              { className: "x1c4vz4f x2lah0s x1xp8n7a" },
              "broadcast",
            ),
          ),
        C &&
          !T &&
          I.push(
            u.jsx(
              "span",
              {
                className: "x1c4vz4f x2lah0s xk50ysn x2fvf9 xwklpps",
                children: o("WAWebMessageMeta.react").getEditedLabel(),
              },
              "edited",
            ),
          ));
      var $ = o("WAWebMessageMeta.react").useBizBot1pLabel(s.safe());
      return (
        $ != null &&
          (I.push(
            u.jsx(
              "span",
              {
                className: "x1c4vz4f x2lah0s xk50ysn x2fvf9 xwklpps",
                children: $,
              },
              "bit-bot-label",
            ),
          ),
          I.push(
            u.jsx(
              "span",
              { className: "x1c4vz4f x2lah0s x6jxa94" },
              "biz-bot-icon",
            ),
          )),
        $ == null &&
          S &&
          (b || o("WAWebMsgGetters").getIsSupportAIMessage(s)) &&
          o("WAWebABPropsSaga").getIsSagaV1Enabled() &&
          I.push(
            u.jsx(
              "span",
              { className: "x1c4vz4f x2lah0s x1849jeq" },
              "saga-message-marker",
            ),
          ),
        (k || f) &&
          !T &&
          I.push(
            u.jsx(
              "span",
              babelHelpers.extends(
                {},
                {
                  0: { className: "x1c4vz4f x2lah0s xn6xy2s" },
                  1: { className: "x1c4vz4f x2lah0s xs2mk4o" },
                }[!!k << 0],
              ),
              k ? "lid-debug-ui" : "checkmark",
            ),
          ),
        k &&
          T &&
          I.push(
            u.jsx(
              "span",
              { className: "x1c4vz4f x2lah0s xs2mk4o" },
              "lid-debug-ui",
            ),
          ),
        I.push(
          u.jsx(
            "span",
            {
              className: "x1c4vz4f x2lah0s",
              children:
                v != null ? o("WAWebClock").Clock.timestampStr(v) : null,
            },
            "timestamp",
          ),
        ),
        u.jsxs("span", {
          className: o("WAWebClassnames").classnamesConvertMeToStylexPlease(
            i,
            (e || (e = r("stylex")))(d),
          ),
          children: [
            t.children,
            I.length > 0 &&
              u.jsx(
                "span",
                babelHelpers.extends(
                  {},
                  (e || (e = r("stylex"))).props(c.spacerContainer, E),
                  { "aria-hidden": !0, children: I },
                ),
              ),
          ],
        })
      );
    }
    ((d.displayName = d.name + " [from " + i.id + "]"), (l.default = d));
  },
  98,
);
