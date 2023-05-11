import React, { useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

import './style.css'
import { Panel, Div, Button, Link } from '../../components'

import chery from '../../img/chery.svg'
import { addStr } from '../../logic/utils'
import { Game, ObjPixel } from '../../logic/game'

import { BoardBlock } from './board'

interface MainProps {
    id: string,
    isDesktop: boolean,
    widthDesktop: number,
    isMobile: boolean
}

export const Board: React.FC<MainProps> = (props: MainProps) => {
    const [ firstRender, setFirstRender ] = React.useState<boolean>(false)

    const { address } = useParams()
    const history = useNavigate()

    useEffect(() => {
        if (!firstRender) {
            setFirstRender(true)
        }
    }, [])

    useEffect(() => {
        if (address) {

        } else {
            history('/boards')
        }
    }, [ address ])

    return (
        <Panel id={props.id}>
            <Div className="panel-board" style={props.isDesktop ? {} : { flexDirection: 'column' }}>

                <div className="nav-bar">
                    <Link onClick={() => history('/')}>Home</Link>
                    <img src={chery} />
                    <Link onClick={() => history('/boards')}>Boards</Link>
                    <img src={chery} />
                    <div>{addStr(address)}</div>
                </div>

                <div className="page-block">
                    <div className="left-block">
                        <div className="title-bar">
                            <h3 className='raider-font'>Rounds</h3>

                        </div>

                        <div className="group-block">

                        </div>

                    </div>

                    <div className="center-block">
                        <div className="title-bar">
                            <h3 className='raider-font'>Prize: 10 EVER</h3>
                            <h3 className='raider-font'>Jackpot: 100.17 EVER</h3>

                        </div>

                        <div style={{ display: 'flex', alignItems: 'start', justifyContent: 'center'}}>
                            <BoardBlock {...props} />
                        </div>

                    </div>

                    <div className="right-block">
                        <div className="title-bar">
                            <h3 className='raider-font'>Settings</h3>

                        </div>

                        <div className="group-block">
                            <div className="block-simple">
                                <h5>Round configuration</h5>
                                <div className="hr" />
                                <div className="cell">
                                    <span>Players per round</span>
                                    <span>6</span>
                                </div>
                                <div className="cell">
                                    <span>Round time</span>
                                    <span>00:05:00</span>
                                </div>
                                <div className="cell">
                                    <span>Move time</span>
                                    <span>00:00:10</span>
                                </div>
                                <div className="cell">
                                    <span>Rake rate, EVER</span>
                                    <span>0.01</span>
                                </div>
                                <div className="cell">
                                    <span>Bet rate, EVER</span>
                                    <span>0</span>
                                </div>

                            </div>
                        </div>

                    </div>

                </div>

            </Div>
        </Panel>
    )
}
