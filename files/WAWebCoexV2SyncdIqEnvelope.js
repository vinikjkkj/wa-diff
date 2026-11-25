__d(
  "WAWebCoexV2SyncdIqEnvelope",
  ["WALogger", "WAWebCoexV2SyncdGating", "getErrorSafe", "requireDeferred"],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u = r("requireDeferred")("WAWebCoexV2SyncdCoexNode").__setRef(
        "WAWebCoexV2SyncdIqEnvelope",
      );
    async function c(t) {
      try {
        if (!(await o("WAWebCoexV2SyncdGating").isCoexV2SyncdEnabled()))
          return null;
        var n = u.getModuleIfRequired();
        return n == null
          ? (o("WALogger").LOG(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "[coexv2] syncd: <coex> code not loaded yet, sending the write without it",
                ])),
            ),
            u
              .load()
              .then(function (e) {
                var n = e.shareKeysForPlainWrite;
                return n(t);
              })
              .catch(d),
            null)
          : await n.buildCoexV2SyncdCoexNode(t);
      } catch (e) {
        return (d(e), null);
      }
    }
    function d(e) {
      o("WALogger")
        .WARN(
          s ||
            (s = babelHelpers.taggedTemplateLiteralLoose([
              "[coexv2] syncd: <coex> not added",
            ])),
        )
        .catching(r("getErrorSafe")(e))
        .sendLogs("coexv2-syncd-coex-failed");
    }
    l.maybeBuildCoexV2SyncdIqNode = c;
  },
  98,
);
