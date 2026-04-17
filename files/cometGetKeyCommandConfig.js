__d(
  "cometGetKeyCommandConfig",
  ["fbt", "FBLogger", "cr:2011405", "cr:2011406", "gkx"],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e = {
      command: null,
      description: s._(/*BTDS*/ "Missing shortcut"),
      handler: function () {},
      isHiddenCommand: !0,
    };
    function u(t, n, o, a, i) {
      if (a == null) return (r("FBLogger")("comet_ax").mustfix(i), e);
      if (
        !Object.prototype.hasOwnProperty.call(a, t) ||
        !Object.prototype.hasOwnProperty.call(a[t].shortcuts, n)
      )
        return (
          r("FBLogger")("comet_ax").mustfix(
            "Missing default key command config for %s and %s",
            t,
            n,
          ),
          e
        );
      var l = a[t].shortcuts[n],
        s = l.command,
        u = l.description;
      return s != null && u != null
        ? {
            command: s,
            commandID: n,
            description: u,
            groupID: t,
            handler: o,
            isHiddenCommand: l.isHiddenCommand,
            singleCharDescription: l.singleCharDescription,
            triggerFromInputs: l.triggerFromInputs,
          }
        : e;
    }
    function c(e, t, r) {
      return u(
        e,
        t,
        r,
        n("cr:2011405"),
        "getCometKeyCommandConfig should only be used in Comet",
      );
    }
    function d(e, t, o) {
      var a = r("gkx")("20836") ? n("cr:2011406") : n("cr:2011405");
      return u(e, t, o, a, "Reached unreachable code");
    }
    ((l.getKeyCommandConfig = u),
      (l.getCometKeyCommandConfig = c),
      (l.getCometAndGeminiKeyCommandConfig = d));
  },
  226,
);
