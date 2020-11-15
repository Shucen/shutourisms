import React, { Component } from 'react';
import { Container, Row } from 'reactstrap';
import { Route } from 'react-router-dom';

import { ReactComponent as Display} from '../img/display.svg';
import { WorkA } from './workA';
import { WorkB } from './workB';
import { WorkC } from './workC';
import { WorkD } from './workD';
import { WorkE } from './workE';
import { WorkF } from './workF';
import { WorkG } from './workG';
import { WorkH } from './workH';
import { WorkI } from './workI';
import { WorkJ } from './workJ';
import { WorkK } from './workK';
import { WorkL } from './workL';
import { WorkM } from './workM';
import { WorkN } from './workN';
import { WorkO } from './workO';
import { WorkP } from './workP';
import { WorkQ } from './workQ';
import { WorkR } from './workR';

import './work.css';

class Work extends Component {
    render(){
        return (
            <div>
                <Container>
                        <Row>
                    <Display className="work-img" />
                    </Row>
                </Container>
                <Route exact path="/work/A" component={ WorkA } />
                <Route path="/work/B" component={ WorkB } />
                <Route path="/work/C" component={ WorkC } />
                <Route path="/work/D" component={ WorkD } />
                <Route path="/work/E" component={ WorkE } />
                <Route path="/work/F" component={ WorkF } />
                <Route path="/work/G" component={ WorkG } />
                <Route path="/work/H" component={ WorkH } />
                <Route path="/work/I" component={ WorkI } />
                <Route path="/work/J" component={ WorkJ } />
                <Route path="/work/K" component={ WorkK } />
                <Route path="/work/L" component={ WorkL } />
                <Route path="/work/M" component={ WorkM } />
                <Route path="/work/N" component={ WorkN } />
                <Route path="/work/O" component={ WorkO } />
                <Route path="/work/P" component={ WorkP } />
                <Route path="/work/Q" component={ WorkQ } />
                <Route path="/work/R" component={ WorkR } />

            </div>
        )
    }
}

export { Work };