import sys
import json


if len(sys.argv) < 2:
    print("No string has been detected.")
    sys.exit(1)

input_arg = sys.argv[1]

if input_arg.endswith(".json"):
    with open(input_arg,"r",encoding="utf-8") as file:
        data = json.load(file)
else:
    data = json.loads(input_arg)


print(json.dumps(data, indent=2))