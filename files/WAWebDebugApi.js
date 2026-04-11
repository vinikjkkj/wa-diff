__d(
  "WAWebDebugApi",
  [
    "WALogger",
    "WAWebApi",
    "WAWebApiParse",
    "WAWebExecApiCmd",
    "WAWebModalManager",
    "WAWebNoop",
    "WAWebOpenChatFlow.react",
    "WAWebSendMsgMultiModalLoadable",
    "WAWebWidFactory",
    "react",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u = s || (s = o("react"));
    function c(t, n) {
      var a = o("WAWebApiParse").parseAPICmd(t);
      if (a.resultType === o("WAWebApi").APICmd.INVALID) {
        o("WALogger").LOG(
          e ||
            (e = babelHelpers.taggedTemplateLiteralLoose([
              "URL is an invalid command",
            ])),
        );
        return;
      }
      (a.resultType,
        r("WAWebExecApiCmd")({ cmdData: a, isExternal: n != null ? n : !0 }));
    }
    c.doc =
      "Manually execute an API command like Group Invite or CTWA (Click to WhatsApp)";
    function d(e, t) {
      e == null
        ? o("WAWebModalManager").ModalManager.open(
            u.jsx(
              o("WAWebSendMsgMultiModalLoadable").SendMsgMultiModalLoadable,
              { msgText: t, urlText: !0 },
            ),
            { transition: "modal-flow" },
          )
        : o("WAWebModalManager").ModalManager.open(
            u.jsx(o("WAWebOpenChatFlow.react").OpenChatFlow, {
              target: { wid: o("WAWebWidFactory").createUserWidOrThrow(e) },
              msgText: t,
              onSuccess: r("WAWebNoop"),
            }),
            { transition: "modal-flow" },
          );
    }
    d.doc =
      "Trigger the API link opening flow (e.g. api.whatsapp.com/send?phone=1234567890&text=Hello)";
    var m = { executeApiCmd: c, openViaAPILink: d };
    l.default = m;
  },
  98,
);
