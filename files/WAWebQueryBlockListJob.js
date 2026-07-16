__d(
  "WAWebQueryBlockListJob",
  ["WALogger", "WASmaxPsaChatBlockGetRPC", "asyncToGeneratorRuntime"],
  function (t, n, r, o, a, i, l) {
    var e;
    function s() {
      return u.apply(this, arguments);
    }
    function u() {
      return (
        (u = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          var t = yield o("WASmaxPsaChatBlockGetRPC").sendChatBlockGetRPC(),
            n;
          e: {
            var r = t;
            if (
              ((typeof r == "object" && r !== null) ||
                typeof r == "function") &&
              r.name === "ChatBlockGetResponseServerError" &&
              ((typeof r.value == "object" && r.value !== null) ||
                typeof r.value == "function") &&
              ((typeof r.value.errorChatBlockError == "object" &&
                r.value.errorChatBlockError !== null) ||
                typeof r.value.errorChatBlockError == "function") &&
              ((typeof r.value.errorChatBlockError.value == "object" &&
                r.value.errorChatBlockError.value !== null) ||
                typeof r.value.errorChatBlockError.value == "function") &&
              "code" in r.value.errorChatBlockError.value &&
              "text" in r.value.errorChatBlockError.value
            ) {
              var a = r.value.errorChatBlockError.value.code,
                i = r.value.errorChatBlockError.value.text;
              (o("WALogger").WARN(
                e ||
                  (e = babelHelpers.taggedTemplateLiteralLoose([
                    "getBlockingStatusForPSAUser: server response with ",
                    ", ",
                    "",
                  ])),
                a,
                i,
              ),
                (n = { errorCode: Number(a), errorText: i }));
              break e;
            }
            if (
              ((typeof r == "object" && r !== null) ||
                typeof r == "function") &&
              r.name === "ChatBlockGetResponseSuccess" &&
              ((typeof r.value == "object" && r.value !== null) ||
                typeof r.value == "function") &&
              "blockingStatus" in r.value
            ) {
              var l = r.value.blockingStatus;
              n = l === "blocked";
              break e;
            }
            throw Error(
              "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                r,
            );
          }
          return n;
        })),
        u.apply(this, arguments)
      );
    }
    l.getBlockingStatusForPSAUser = s;
  },
  98,
);
