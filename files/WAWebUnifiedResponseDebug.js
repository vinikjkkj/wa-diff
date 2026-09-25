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
      m =
        "https://static.whatsapp.net/bloks_asset?cat=business_directory_icon&id=ic_apparel_xxhdpi",
      p = m,
      _ = "footer_image";
    function f(t) {
      var n = o("WAWebDebugUtils").getSelectedChat(),
        a = g(t != null ? t : _);
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
    function g(e) {
      var t = S.get(e);
      if (t == null)
        throw r("err")(
          '[injectUnifiedResponseTestMessage] unknown fixture "' +
            e +
            '", expected one of: ' +
            R(),
        );
      return t();
    }
    function h(e, t) {
      return {
        __typename: "XMSGGenAIUnifiedResponse",
        response_id: "debug-ur-" + Date.now().toString(36),
        sections: e,
        footer_sections: t,
      };
    }
    function y() {
      return {
        __typename: "GenAIUnifiedResponseSection",
        view_model: {
          __typename: "GenAISingleLayoutViewModel",
          primitive: { __typename: "GenAIMarkdownTextUXPrimitive", text: s },
        },
      };
    }
    function C() {
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
    function b() {
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
    function v() {
      return {
        __typename: "GenAIUnifiedResponseSection",
        view_model: {
          __typename: "GenAISingleLayoutViewModel",
          primitive: {
            __typename: "GenAIFilePrimitive",
            file_extension: "pdf",
            file_length: 4508876,
            page_count: 23,
            preview_image: {
              __typename: "GenAIMediaItem",
              height: 73,
              mime_type: "image/png",
              url: p,
              width: 72,
            },
            title: "Weekend trip itinerary.pdf",
            url: m,
          },
        },
      };
    }
    var S = new Map([
      [
        "text",
        function () {
          return h([y()]);
        },
      ],
      [
        "media",
        function () {
          return h([y(), C()]);
        },
      ],
      [
        "file",
        function () {
          return h([y(), v()]);
        },
      ],
      [
        "footer_image",
        function () {
          return h([y()], [C()]);
        },
      ],
      [
        "footer_reel",
        function () {
          return h([y()], [b()]);
        },
      ],
    ]);
    function R() {
      return Array.from(S.keys()).join(", ");
    }
    ((f.doc =
      "Stage a Meta AI unified-response message in the open chat. Args: (fixtureName?) \u2014 one of " +
      R() +
      ", defaults to " +
      _),
      (l.injectUnifiedResponseTestMessage = f));
  },
  98,
);
