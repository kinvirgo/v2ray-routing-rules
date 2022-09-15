
[
    {
        "type": "field",
        "outboundTag": "direct",
        "domain": ["geosite:cn"],
         "ip": [
          "geoip:cn", 
          "geoip:private" 
        ]
    },
    {
        "type": "field",
        "outboundTag": "block",
        "domain": [
          "geosite:category-ads",
          "geosite:category-ads-all"
          ]
    },
    {
        "type": "field",
        "outboundTag": "proxy",
        "domain": ["geosite:tld-!cn", "geosite:geolocation-!cn", "geosite:google", "geosite:apple"],
        "ip": ["geoip:!cn"]
    },
    {
        "type": "field",
        "outboundTag": "direct",
        "port": "0-65535"
    }
]
