__d(
  "WAWebWindowsHybridBridge.v2634",
  [
    "WAWebBuildConstants",
    "WAWebWindowsHybridAppActivationBridge.v2634",
    "WAWebWindowsHybridBridgeAbProps.v2634",
    "WAWebWindowsHybridBridgeAdv.v2634",
    "WAWebWindowsHybridBridgeBrowserExtensions.v2634",
    "WAWebWindowsHybridBridgeConnection.v2634",
    "WAWebWindowsHybridBridgeContacts.v2634",
    "WAWebWindowsHybridBridgeDebugFeatures.v2634",
    "WAWebWindowsHybridBridgeLinksPreview.v2634",
    "WAWebWindowsHybridBridgeMediaFiles.v2634",
    "WAWebWindowsHybridBridgeMediaTranscoder.v2634",
    "WAWebWindowsHybridBridgeMetaConfig.v2634",
    "WAWebWindowsHybridBridgeNativeAppState.v2634",
    "WAWebWindowsHybridBridgeOds.v2634",
    "WAWebWindowsHybridBridgePictures.v2634",
    "WAWebWindowsHybridBridgePreferences.v2634",
    "WAWebWindowsHybridBridgeRateTheApp.v2634",
    "WAWebWindowsHybridBridgeRingtone.v2634",
    "WAWebWindowsHybridBridgeScalingControl.v2634",
    "WAWebWindowsHybridBridgeSeamlessMigration.v2634",
    "WAWebWindowsHybridBridgeSharesheet.v2634",
    "WAWebWindowsHybridBridgeSystemIntegrations.v2634",
    "WAWebWindowsHybridBridgeTouchpadFix.v2634",
    "WAWebWindowsHybridBridgeVoip.v2634",
    "WAWebWindowsHybridBridgeWam.v2634",
    "cr:17220",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = (function () {
      function e(e) {
        var t;
        ((e.hostObjects.options.defaultSyncProxy = !0),
          (e.hostObjects.options.forceAsyncMethodMatches = [
            /Async$/,
            /AsyncWithSpeller$/,
          ]),
          (e.hostObjects.options.ignoreMemberNotFoundError = !0));
        var r = e.hostObjects.AbPropsBridge;
        r != null &&
          (this.abProps = new (o(
            "WAWebWindowsHybridBridgeAbProps.v2634",
          ).WindowsHybridBridgeAbProps_v2634)(r));
        var a = e.hostObjects.WamBridge;
        a != null &&
          (this.wam = new (o(
            "WAWebWindowsHybridBridgeWam.v2634",
          ).WindowsHybridBridgeWam_v2634)(a));
        var i = e.hostObjects.PreferencesBridge;
        i &&
          (this.$1 = new (o(
            "WAWebWindowsHybridBridgePreferences.v2634",
          ).WindowsHybridBridgePreferences_v2634)(i));
        var l = e.hostObjects.ScalingControlBridge;
        l &&
          (this.scalingControl = new (o(
            "WAWebWindowsHybridBridgeScalingControl.v2634",
          ).WindowsHybridBridgeScalingControl_v2634)(l));
        var s = e.hostObjects.OdsBridge;
        s != null &&
          ((this.ods = new (o(
            "WAWebWindowsHybridBridgeOds.v2634",
          ).WindowsHybridBridgeOds_v2634)(s)),
          this.ods.initialize());
        var u = e.hostObjects.PicturesBridge;
        u &&
          (this.pictures = new (o(
            "WAWebWindowsHybridBridgePictures.v2634",
          ).WindowsHybridBridgePictures_v2634)(u));
        var c = e.hostObjects.DebugFeaturesBridge,
          d = n("cr:17220") == null ? void 0 : n("cr:17220").debugFeaturesMock;
        c != null
          ? (this.$4 = new (o(
              "WAWebWindowsHybridBridgeDebugFeatures.v2634",
            ).WindowsHybridBridgeDebugFeatures_v2634)(c))
          : d != null;
        var m = e.hostObjects.VoipBridge,
          p = e.hostObjects.VoipSignalingBridge;
        (m &&
          p &&
          (this.voip = new (o(
            "WAWebWindowsHybridBridgeVoip.v2634",
          ).VoipWinRTBridge_v2634)(m, p)),
          (this.$5 = new (o(
            "WAWebWindowsHybridBridgeRateTheApp.v2634",
          ).WAWebWindowsHybridBridgeRateTheApp_v2634)(
            e.hostObjects.RateAppBridge,
          )),
          (this.$3 = new (o(
            "WAWebWindowsHybridBridgeConnection.v2634",
          ).WindowsHybridBridgeConnection_v2634)(
            e.hostObjects.ConnectionBridge,
          )),
          (this.$2 = e.hostObjects.ClientKeyBridge),
          (this.serverEncKeySaltBridge = e.hostObjects.ServerEncKeySaltBridge),
          (this.touchpadFix = new (o(
            "WAWebWindowsHybridBridgeTouchpadFix.v2634",
          ).WindowsHybridBridgeTouchpadFix_v2634)(e.hostObjects.TouchpadFix)),
          (this.linksPreview = new (o(
            "WAWebWindowsHybridBridgeLinksPreview.v2634",
          ).WindowsHybridBridgeLinksPreview_v2634)(
            e.hostObjects.LinksPreviewBridge,
          )));
        try {
          var _ = e.hostObjects.sync.PopulatedContactsBridge,
            f = e.hostObjects.PopulatedContactsBridge;
          f != null &&
            (this.contacts = new (o(
              "WAWebWindowsHybridBridgeContacts.v2634",
            ).WindowsHybridBridgeContacts_v2634)(f, _, !0));
        } catch (t) {
          var g = e.hostObjects.ContactsBridge;
          g != null &&
            (this.contacts = new (o(
              "WAWebWindowsHybridBridgeContacts.v2634",
            ).WindowsHybridBridgeContacts_v2634)(
              g,
              e.hostObjects.sync.ContactsBridge,
              !1,
            ));
        }
        this.sqlite = e.hostObjects.SQLiteBridge;
        var h = e.hostObjects.MediaFilesBridge;
        h != null &&
          (this.mediaFiles = new (o(
            "WAWebWindowsHybridBridgeMediaFiles.v2634",
          ).WAWebWindowsHybridBridgeMediaFiles_v2634)(h, e));
        var y = e.hostObjects.SharesheetBridge;
        y != null &&
          (this.sharesheetBridge = new (o(
            "WAWebWindowsHybridBridgeSharesheet.v2634",
          ).WAWebWindowsHybridBridgeSharesheet_v2634)(y));
        var C = e.hostObjects.AppActivationBridge;
        C != null &&
          (this.appActivationBridge = new (o(
            "WAWebWindowsHybridAppActivationBridge.v2634",
          ).WindowsHybridAppActivationBridge_v2634)(C));
        var b = e.hostObjects.NativeAppStateBridge,
          v = e.hostObjects.sync.NativeAppStateBridge;
        b != null &&
          (this.nativeAppStateBridge = new (o(
            "WAWebWindowsHybridBridgeNativeAppState.v2634",
          ).WindowsHybridBridgeNativeAppState_v2634)(b, v));
        var S = e.hostObjects.SystemIntegrationsBridge;
        S &&
          (this.systemIntegrationsBridge = new (o(
            "WAWebWindowsHybridBridgeSystemIntegrations.v2634",
          ).WindowsHybridBridgeSystemIntegrations_v2634)(S));
        var R = e.hostObjects.BrowserExtensionsBridge;
        R &&
          (this.browserExtensionsBridge = new (o(
            "WAWebWindowsHybridBridgeBrowserExtensions.v2634",
          ).WindowsHybridBridgeBrowserExtensions_v2634)(R));
        var L = e.hostObjects.SeamlessMigrationBridge;
        L &&
          (this.seamlessMigrationBridge = new (o(
            "WAWebWindowsHybridBridgeSeamlessMigration.v2634",
          ).WindowsHybridBridgeSeamlessMigration_v2634)(L));
        var E = e.hostObjects.MediaTranscodingBridge;
        (E &&
          (this.mediaTranscodeBridge = new (o(
            "WAWebWindowsHybridBridgeMediaTranscoder.v2634",
          ).WindowsHybridBridgeMediaTranscoder_v2634)(e, E)),
          (this.adv = new (o(
            "WAWebWindowsHybridBridgeAdv.v2634",
          ).WindowsHybridBridgeAdv_v2634)(e.hostObjects.AdvBridge)));
        var k = e.hostObjects.RingtoneBridge;
        k != null &&
          (this.ringtoneBridge = new (o(
            "WAWebWindowsHybridBridgeRingtone.v2634",
          ).WindowsHybridBridgeRingtone_v2634)(k));
        var I = e.hostObjects.MetaConfigBridge;
        (I != null &&
          ((this.metaConfig = new (o(
            "WAWebWindowsHybridBridgeMetaConfig.v2634",
          ).WindowsHybridBridgeMetaConfig_v2634)(I)),
          this.metaConfig.initialize()),
          (t = e.hostObjects.WebUpdateBridge) == null ||
            t.updateWebRevision(o("WAWebBuildConstants").VERSION_TERTIARY));
      }
      var t = e.prototype;
      return (
        (t.getPreferences = function () {
          var e;
          return ((e = this.$1) == null || e.initialize(), this.$1);
        }),
        (t.getScalingControl = function () {
          var e;
          return (
            (e = this.scalingControl) == null || e.initialize(),
            this.scalingControl
          );
        }),
        (t.getRateTheApp = function () {
          return this.$5;
        }),
        (t.getClientKeyBridge = function () {
          return this.$2;
        }),
        (t.getDebugFeatures = function () {
          return this.$4;
        }),
        e
      );
    })();
    l.WindowsHybridBridge_v2634 = e;
  },
  98,
);
