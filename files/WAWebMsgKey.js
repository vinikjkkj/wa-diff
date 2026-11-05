__d(
  "WAWebMsgKey",
  [
    "WALogger",
    "WARandomHex",
    "WAWebMsgKeyNewId",
    "WAWebParseMsgKeyString",
    "WAWebUserPrefsMeUser",
    "WAWebWid",
    "WAWebWidFactory",
    "asyncToGeneratorRuntime",
    "err",
    "getErrorSafe",
    "isStringNullOrEmpty",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c,
      d,
      m,
      p,
      _ = (function () {
        function t(n) {
          var a,
            i = n;
          if (!i) throw r("err")("MsgKey error: obj is null/undefined");
          i.id instanceof t &&
            ((i = i.id),
            o("WALogger").WARN(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "MsgKey error: id is already a MsgKey",
                ])),
            ));
          var l = !r("isStringNullOrEmpty")(i.id),
            p = i.from != null && i.to != null && l,
            _ = i.fromMe !== void 0 && i.remote != null && l,
            f,
            g,
            h,
            y,
            C,
            b,
            v,
            S =
              (a = o("WAWebUserPrefsMeUser").getMaybeMePnUser()) != null
                ? a
                : o("WAWebUserPrefsMeUser").getMaybeMeLidUser();
          if (S) {
            if (p && _)
              throw (
                o("WALogger").WARN(
                  s ||
                    (s = babelHelpers.taggedTemplateLiteralLoose([
                      "Unclear constructor MsgKey",
                    ])),
                ),
                r("err")("MsgKey error: unclear which constructor to use")
              );
            if (!p && !_)
              throw (
                o("WALogger").WARN(
                  u ||
                    (u = babelHelpers.taggedTemplateLiteralLoose([
                      "No matching constructor MsgKey",
                    ])),
                ),
                r("err")("MsgKey error: don't have a matching constructor")
              );
            if (p) {
              var R = i;
              if (
                ((f = R.from),
                (h = R.id),
                (y = R.participant),
                (C = R.selfDir),
                (g = R.to),
                !(f instanceof r("WAWebWid")) ||
                  !(g instanceof r("WAWebWid")) ||
                  (y && !(y instanceof r("WAWebWid"))))
              )
                throw (
                  o("WALogger").WARN(
                    c ||
                      (c = babelHelpers.taggedTemplateLiteralLoose([
                        "Incorrect Wid MsgKey",
                      ])),
                  ),
                  r("err")("MsgKey error: something is not a wid")
                );
              var L = r("WAWebWid").equals(f, g);
              ((C = L ? C : void 0),
                L && o("WAWebUserPrefsMeUser").isMePrimary(f)
                  ? ((b = C === "out"), (v = g))
                  : o("WAWebUserPrefsMeUser").isMePrimary(f)
                    ? ((b = !0), (v = g))
                    : o("WAWebUserPrefsMeUser").isMePrimary(g)
                      ? ((b = !1), (v = f))
                      : L &&
                          (r("WAWebWid").isGroup(f) ||
                            r("WAWebWid").isBroadcast(f))
                        ? ((b = !0), (v = f))
                        : o("WALogger").WARN(
                            d ||
                              (d = babelHelpers.taggedTemplateLiteralLoose([
                                "MsgKey case error",
                              ])),
                          ),
                b !== void 0 && (this.fromMe = b),
                v && (this.remote = v),
                h && (this.id = h));
            } else if (_) {
              var E = i;
              if (
                ((b = E.fromMe),
                (h = E.id),
                (y = E.participant),
                (v = E.remote),
                !(v instanceof r("WAWebWid")) ||
                  (y && !(y instanceof r("WAWebWid"))))
              )
                throw (
                  o("WALogger").WARN(
                    m ||
                      (m = babelHelpers.taggedTemplateLiteralLoose([
                        "Incorrect Wid MsgKey",
                      ])),
                  ),
                  r("err")("MsgKey error: something is not a wid")
                );
              (o("WAWebUserPrefsMeUser").isMePrimary(v) &&
                (C = b === !0 ? "out" : "in"),
                b !== void 0 && (this.fromMe = b),
                v && (this.remote = v),
                h && (this.id = h));
            }
          } else
            throw r("err")(
              "MsgKey error: me is undefined. Running tests? Call setupGlobalsForTests first.",
            );
          var k = [this.fromMe, this.remote, this.id];
          (C !== void 0 && ((this.self = C), k.push(this.self)),
            y !== void 0 && ((this.participant = y), k.push(this.participant)),
            (this.$1 = k.join("_")));
        }
        var a = t.prototype;
        return (
          (a.toString = function () {
            return this.$1;
          }),
          (a.clone = function () {
            return new t({
              fromMe: this.fromMe,
              remote: this.remote,
              id: this.id,
              participant: this.participant,
            });
          }),
          (a.equals = function (n) {
            return n instanceof t && this.toString() === n.toString();
          }),
          (t.fromString = function (n) {
            if (n == null)
              throw r("err")(
                "MsgKey.fromString error: str is null or not a string",
              );
            return t.from(n);
          }),
          (t.from = function (n) {
            if (n instanceof t) return n;
            var e;
            return (
              typeof n == "string"
                ? (e = r("WAWebParseMsgKeyString")(n))
                : (e = n),
              new t({
                fromMe: e.fromMe,
                remote: o("WAWebWidFactory").createWidFromWidLike(e.remote),
                id: e.id,
                participant:
                  e.participant != null
                    ? o("WAWebWidFactory").createWidFromWidLike(e.participant)
                    : void 0,
              })
            );
          }),
          (t.newId = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
              try {
                var e = yield o("WAWebMsgKeyNewId").getMsgKeyNewSHA256Id();
                return e;
              } catch (e) {
                var n = r("getErrorSafe")(e);
                return (
                  o("WALogger")
                    .ERROR(
                      p ||
                        (p = babelHelpers.taggedTemplateLiteralLoose([
                          "getMsgKeyNewId",
                        ])),
                    )
                    .catching(n)
                    .sendLogs("msg_key: error generating sha256 message key"),
                  t.newId_DEPRECATED()
                );
              }
            });
            function a() {
              return e.apply(this, arguments);
            }
            return a;
          })()),
          (t.newId_DEPRECATED = function () {
            return "3EB0" + o("WARandomHex").randomHex(8);
          }),
          t
        );
      })();
    l.default = _;
  },
  98,
);
