# @availity/typography

> Availity typography components

## Installation

```bash
npm install @availity/typography --save
```

### Disclaimer (Named Export)

#### Usage
```javascript
import React from 'react';
import { Disclaimer } from '@availity/typography';

// ...
<div>
  <Disclaimer styled>
    I have fully read this agreement and understand that I am entering into
    a legally binding agreement and that my organization is bound by the
    terms and conditions contained therein. I attest and certify that I am
    the Primary Controlling Authority for the organization named herein and
    that I possess the necessary legal authority to bind this organization.
    I further attest and certify my organization&apos;s designation as a
    Covered Entity under HIPAA, as more fully described in 45 CFR § 160.103.
  </Disclaimer>
</div>
// ...
```
##### Props
- **`styled`**: Boolean. Optional. Default *true*. When true, a vertical bar is displayed to the left of the disclaimer

### Agreement (Named Export)

#### Usage
```javascript
import React from 'react';
import { Agreement } from '@availity/typography';

// ...
<div>
  <Agreement>
    <p>
      veritatis doloremque ut hic et etvitae amet natus perferendisdolores
      illum et rerum officia autiste deserunt quis sed corporis explicabo
      qui non pariaturaccusantium molestias non aut ut utnumquam qui vero
      est nihil eum ullam autemrerum repellat dicta quae dolorest occaecati
      sapiente a cupiditatereprehenderit quibusdam nam eveniet voluptatem
      quis soluta quamdelectus consequatur qui incidunt voluptatem
      consequuntur
    </p>
  </Agreement>
</div>
// ...
```
