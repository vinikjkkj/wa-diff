__d(
  "WAWebUnifiedResponseDebug",
  [
    "WALogger",
    "WATimeUtils",
    "WAWebDebugUtils",
    "WAWebMsgKey",
    "WAWebMsgModel",
    "WAWebMsgType",
    "WAWebRichResponse.flow",
    "WAWebUserPrefsMeUser",
    "err",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = "Kilimanjaro is the highest peak in Africa.",
      u = "https://static.whatsapp.net/debug/unified-response-placeholder.jpg",
      c = "https://static.whatsapp.net/debug/unified-response-placeholder.mp4",
      d = "https://static.whatsapp.net/debug/unified-response-avatar.jpg",
      m = "footer_image";
    function p(t) {
      var n = o("WAWebDebugUtils").getSelectedChat(),
        a = _(t != null ? t : m);
      (n.msgs.add(
        new (o("WAWebMsgModel").Msg)({
          id: new (r("WAWebMsgKey"))({
            fromMe: !1,
            remote: n.id,
            id: "DEBUG_UR_" + Date.now().toString(36),
          }),
          t: o("WATimeUtils").unixTime(),
          from: n.id,
          to: o("WAWebUserPrefsMeUser").getMeUserOrThrow(),
          type: o("WAWebMsgType").MSG_TYPE.RICH_RESPONSE,
          body: s,
          richResponse: {
            parseState: o("WAWebRichResponse.flow").RichResponseParseState
              .Parsed,
            type: o("WAWebRichResponse.flow").ParsedRichResponseType.Standard,
            fragments: [
              {
                type: o("WAWebRichResponse.flow").RichResponseFragmentType.Text,
                text: s,
              },
            ],
          },
          unifiedResponse: a,
        }),
      ),
        o("WALogger").LOG(
          e ||
            (e = babelHelpers.taggedTemplateLiteralLoose([
              "[injectUnifiedResponseTestMessage] staged ",
              " in ",
              "",
            ])),
          a.response_id,
          n.id,
        ));
    }
    function _(e) {
      var t = C.get(e);
      if (t == null)
        throw r("err")(
          '[injectUnifiedResponseTestMessage] unknown fixture "' +
            e +
            '", expected one of: ' +
            b(),
        );
      return t();
    }
    function f(e, t) {
      return {
        __typename: "XMSGGenAIUnifiedResponse",
        response_id: "debug-ur-" + Date.now().toString(36),
        sections: e,
        footer_sections: t,
      };
    }
    function g() {
      return {
        __typename: "GenAIUnifiedResponseSection",
        view_model: {
          __typename: "GenAISingleLayoutViewModel",
          primitive: { __typename: "GenAIMarkdownTextUXPrimitive", text: s },
        },
      };
    }
    function h() {
      return {
        __typename: "GenAIUnifiedResponseSection",
        view_model: {
          __typename: "GenAISingleLayoutViewModel",
          primitive: {
            __typename: "GenAIImagePrimitive",
            full_image: {
              __typename: "GenAIMediaItem",
              height: 1024,
              mime_type: "image/jpeg",
              url: u,
              width: 1024,
            },
            preview_image: {
              __typename: "GenAIMediaItem",
              height: 256,
              mime_type: "image/jpeg",
              url: u,
              width: 256,
            },
          },
        },
      };
    }
    function y() {
      return {
        __typename: "GenAIUnifiedResponseSection",
        view_model: {
          __typename: "GenAISingleLayoutViewModel",
          primitive: {
            __typename: "GenAIReelPrimitive",
            avatar_url: d,
            creator: "debug_creator",
            reels_title: "Debug reel",
            reels_url: c,
            thumbnail_url: u,
          },
        },
      };
    }
    var C = new Map([
      [
        "text",
        function () {
          return f([g()]);
        },
      ],
      [
        "media",
        function () {
          return f([g(), h()]);
        },
      ],
      [
        "footer_image",
        function () {
          return f([g()], [h()]);
        },
      ],
      [
        "footer_reel",
        function () {
          return f([g()], [y()]);
        },
      ],
    ]);
    function b() {
      return Array.from(C.keys()).join(", ");
    }
    ((p.doc =
      "Stage a Meta AI unified-response message in the open chat. Args: (fixtureName?) \u2014 one of " +
      b() +
      ", defaults to " +
      m),
      (l.injectUnifiedResponseTestMessage = p));
  },
  98,
);
