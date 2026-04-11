__d(
  "WAWebLoginWamEvent",
  [
    "WAWebWamCodegenUtils",
    "WAWebWamEnumAndroidKeystoreStateType",
    "WAWebWamEnumConnectionOriginType",
    "WAWebWamEnumConnectionSequenceStepType",
    "WAWebWamEnumDnsResolutionMethodType",
    "WAWebWamEnumLoginDnsResolverType",
    "WAWebWamEnumLoginHostType",
    "WAWebWamEnumLoginPortNumber",
    "WAWebWamEnumLoginResultType",
    "WAWebWamEnumStreamSocketProviderType",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = (e = o("WAWebWamCodegenUtils")).defineEvents(
        {
          Login: [
            460,
            {
              androidKeystoreState: [
                10,
                o("WAWebWamEnumAndroidKeystoreStateType")
                  .ANDROID_KEYSTORE_STATE_TYPE,
              ],
              appContext: [20, e.TYPES.STRING],
              appContextBitfield: [21, e.TYPES.INTEGER],
              connectionOrigin: [
                6,
                o("WAWebWamEnumConnectionOriginType").CONNECTION_ORIGIN_TYPE,
              ],
              connectionSequenceStep: [
                11,
                o("WAWebWamEnumConnectionSequenceStepType")
                  .CONNECTION_SEQUENCE_STEP_TYPE,
              ],
              connectionT: [5, e.TYPES.TIMER],
              dnsResolutionMethod: [
                12,
                o("WAWebWamEnumDnsResolutionMethodType")
                  .DNS_RESOLUTION_METHOD_TYPE,
              ],
              loginDnsResolver: [
                13,
                o("WAWebWamEnumLoginDnsResolverType").LOGIN_DNS_RESOLVER_TYPE,
              ],
              loginHistoryStepResult: [27, e.TYPES.BOOLEAN],
              loginIpSource: [
                14,
                o("WAWebWamEnumLoginHostType").LOGIN_HOST_TYPE,
              ],
              loginPort: [
                15,
                o("WAWebWamEnumLoginPortNumber").LOGIN_PORT_NUMBER,
              ],
              loginResolvedPop: [19, e.TYPES.STRING],
              loginResult: [
                1,
                o("WAWebWamEnumLoginResultType").LOGIN_RESULT_TYPE,
              ],
              loginSocketProvider: [
                22,
                o("WAWebWamEnumStreamSocketProviderType")
                  .STREAM_SOCKET_PROVIDER_TYPE,
              ],
              loginT: [3, e.TYPES.TIMER],
              logoutSessionId: [18, e.TYPES.INTEGER],
              longConnect: [4, e.TYPES.BOOLEAN],
              mnsDnsCacheAge: [23, e.TYPES.INTEGER],
              networkIsVpn: [24, e.TYPES.BOOLEAN],
              noiseProtocolVersion: [16, e.TYPES.INTEGER],
              numIpv4Addresses: [25, e.TYPES.INTEGER],
              numIpv6Addresses: [26, e.TYPES.INTEGER],
              passive: [8, e.TYPES.BOOLEAN],
              pendingAcksCount: [17, e.TYPES.INTEGER],
              retryCount: [2, e.TYPES.INTEGER],
              sequenceStep: [7, e.TYPES.INTEGER],
              serverErrorCode: [9, e.TYPES.INTEGER],
              traceIdInt: [29, e.TYPES.INTEGER],
              unprocessedMessageCount: [28, e.TYPES.INTEGER],
            },
            [1, 1, 1],
            "regular",
          ],
        },
        { Login: [] },
      );
    l.LoginWamEvent = s;
  },
  98,
);
