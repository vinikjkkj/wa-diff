__d(
  "WAWebHatchCommandMetadataUtils",
  ["WAWebBotGating", "WAWebBotUtils", "WAWebHatchCommandCache"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t) {
      if (
        !o("WAWebBotGating").isHatchCommandsEnabled() ||
        !o("WAWebBotUtils").isHatchBot(t)
      )
        return null;
      var n = e.trim();
      if (!n.startsWith("/")) return null;
      var r = t.toJid(),
        a = o("WAWebHatchCommandCache").getHatchCommands(r);
      if (a == null) return null;
      var i = s(n, a);
      if (i == null) return null;
      var l = i.name.startsWith("/") ? i.name.slice(1) : i.name;
      return {
        commandName: l,
        commandDescription: i.description,
        commandPrompt: i.prompt,
      };
    }
    function s(e, t) {
      var n = null,
        r = 0;
      for (var o of t) {
        var a = o.name.startsWith("/") ? o.name : "/" + o.name;
        e.startsWith(a) &&
          (e.length === a.length || e[a.length] === " ") &&
          a.length > r &&
          ((n = o), (r = a.length));
      }
      return n;
    }
    l.resolveHatchCommandMetadata = e;
  },
  98,
);
