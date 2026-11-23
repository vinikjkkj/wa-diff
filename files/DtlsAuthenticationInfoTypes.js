__d(
  "DtlsAuthenticationInfoTypes",
  ["$InternalEnum"],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = n("$InternalEnum")({
      Success: 0,
      Uninitialized: 1,
      SignatureGenerationFailed: 2,
      EmptyAuthenticationInfoAtVerification: 3,
      EmptyProtocolVersionAtVerification: 4,
      EmptyIdentityKeyPublicInfoAtVerification: 5,
      EmptySignatureAtVerification: 6,
      EmptyIdentityKeyModeAtVerification: 7,
      EmptyDeviceIdAtVerification: 8,
      EmptyPublicIdentityKeyAtVerification: 9,
      InvalidUserIdAtVerification: 10,
      Base64DecodingFailedAtVerification: 11,
      ThriftDeserializationFailedAtVerification: 12,
      FailedToSerializePublicKeyAtVerification: 13,
      SignatureMismatchAtVerification: 14,
      SignalLibFailedToVerifySignature: 15,
      SignalLibFailedToGenerateSignature: 16,
      FailedToSerializePrivateKeyAtSignatureGeneration: 17,
      TrustVerficationFailedForRemoteEndpoint: 18,
      RemoteEndpointIsUntrusted: 19,
      FailedToPersistIdentityOfRemoteEndpoint: 20,
      InvalidFingerprintDataInSdp: 21,
      Deprecated_RemoteFbIdNotProvided: 22,
      MissingAuthenticationInfoInSdp: 23,
      IneligibleForAuthentication: 24,
      EmptyRemoteUserIdAtVerification: 25,
      UnexpectedIkModeInRemoteAuthenticationInfo: 26,
      RemoteSdpDoesNotHaveFingerprint: 27,
    });
    a.exports = { DtlsAuthenticatorStatus: e };
  },
  null,
);
